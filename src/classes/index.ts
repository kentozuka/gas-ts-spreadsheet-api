const UUID_LABEL = 'UUID'

const STYLE = {
  weight: 'bold' as 'normal' | 'bold',
  background: '#58a55d',
  color: '#ffffff'
}

/**
 *
 * ColorとBG Color変えられるようにする
 * Labelとかもちゃんとタイプと合うようにする
 * ID渡してできるようにする
 * 設定のJSONというかType作ってそれをConstantsに保存する
 * Functionちゃんと動くようにする
 *
 * setTabColor
 *
 */

/* = = = = = = = = = = = = = = = = = = = = = = */
/* = = = = = = =  SHEET CLASSSES = = = = = = = */
/* = = = = = = = = = = = = = = = = = = = = = = */
export default class Sheet {
  sheetName: string
  sp: GoogleAppsScript.Spreadsheet.Spreadsheet
  sheet: GoogleAppsScript.Spreadsheet.Sheet
  label: string[]

  constructor(sheetName: string, label: string[]) {
    this.sheetName = sheetName
    this.sp = SpreadsheetApp.openById(SPREAD_ID)
    this.sheet = this.sp.getSheetByName(sheetName)
    this.label = label
  }

  get existingTable() {
    return this.sheet !== null
  }

  get labels() {
    return [UUID_LABEL, ...this.label]
  }

  get labelsLength() {
    return this.labels.length
  }

  get uuid() {
    return Utilities.getUuid()
  }

  formatTable() {
    this.sheet.setFrozenRows(1)
    const lc = this.sheet.getLastColumn()
    const top = this.sheet.getRange(1, 1, 1, lc)
    top.setFontWeight(STYLE.weight)
    top.setBackground(STYLE.background)
    top.setFontColor(STYLE.color)

    const deleteColNumStart = this.labelsLength + 1 // avoid the last colmun itself
    const deleteColNum = 26 - this.labelsLength // a-z cols and one more
    this.sheet.deleteRows(10, 990)
    this.sheet.deleteColumns(deleteColNumStart, deleteColNum)
  }

  createTable() {
    if (this.existingTable) return
    const newSheet = this.sp.insertSheet(this.sheetName)
    this.sheet = newSheet

    this.sheet.appendRow(this.labels)
    this.formatTable()
  }

  clearTable() {
    const lr = this.sheet.getLastRow()
    const lc = this.sheet.getLastColumn()
    const rg = this.sheet.getRange(2, 1, lr, lc)
    rg.clear()
  }

  uuidRowNum(uuid: string) {
    const lr = this.sheet.getLastRow()
    const rg = this.sheet.getRange(1, 1, lr)
    const vals = rg.getValues()
    const ids = vals.flat()
    if (!ids.includes(uuid)) return 0 // real num start from 1

    const ix = ids.indexOf(uuid)
    const numIx = ix + 1 // index to real number
    return numIx
  }

  obj2arr(obj: any) {
    const entries = Object.entries(obj)
    const keys = entries.map(([key, _]) => key)
    const vals = entries.map(([_, val]) => val)
    const hol = []

    this.labels.forEach((lb) => {
      const index = keys.indexOf(lb)
      const v = index === -1 ? '' : vals[index]
      hol.push(v)
    })

    return hol
  }

  arr2obj(arr: any[]) {
    return this.labels.reduce((pr, cu, ix) => ({ ...pr, [cu]: arr[ix] }), {})
  }

  create(data: any) {
    const uuid = Utilities.getUuid()
    const uuided = {
      ...data,
      [UUID_LABEL]: uuid
    }
    const arr = this.obj2arr(uuided)
    this.sheet.appendRow(arr)

    return uuid
  }

  createMany(data: any) {}

  where(col: string, data: any) {
    if (!this.labels.includes(col)) return null

    const colIndex = this.labels.indexOf(col) + 1

    const lr = this.sheet.getLastRow()
    const rg = this.sheet.getRange(1, colIndex, lr, 1)
    const vals = rg.getValues().flat().map(String)
    if (!vals.includes(`${data}`)) return null // real num start from 1

    const row = vals.indexOf(`${data}`) + 1 // index + 1 => number
    const range = this.sheet.getRange(row, 1, 1, this.labelsLength)
    const value = range.getValues().flat()
    return this.arr2obj(value)
  }

  find(uuid: string) {
    return this.where(UUID_LABEL, uuid)
  }

  all() {
    const range = this.sheet.getDataRange()
    const values = range.getValues()
    values.shift() // removes label

    const mapped = values.map((x) => this.arr2obj(x))
    return mapped
  }

  findMany(data: any) {}

  update(uuid: string, data: any) {
    const numIx = this.uuidRowNum(uuid)
    if (numIx === 0) return null // no entry found
    const len = this.labelsLength
    const range = this.sheet.getRange(numIx, 1, 1, len)
    const val = this.obj2arr(data)
    range.setValues([val])
  }
}
