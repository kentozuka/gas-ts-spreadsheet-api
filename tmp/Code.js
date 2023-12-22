/* = = = = = = = = =
LAST DEPLOYED: Mon Jul 17 2023
= = = = = = = = = */

/* = = = = = = = = =
[TODO]
- add created_at and updated_at on sheet class
- create subscription class & sheet
- create showcase sheet?
- name constants
- see:  https://appsheet-apps.jp/appsheet/automation-review-05/
 = = = = = = = = = */

/* = = = = = = = = = = = = = = = = = = = = = = */
/* = = = = = = =    CONSTANTS    = = = = = = = */
/* = = = = = = = = = = = = = = = = = = = = = = */

const NOTIFICATION = true
const CONTACT_NAME = 'CONTACT_FORM'
const NOTIFICATION_NAME = 'NOTIFICATION'
const TITLE = 'お問い合わせを受け付けました'
const MESSAGE = '下記内容でお問い合わせを受け付けました： '
const SPREAD_ID = '1FIUZWcxbztU5TJMeZ41qxyAbuEBX9mIOI23t6gQ0NXE'
const DEV = 'kentozuka22@gmail.com'

/* = = = = = = = = = WORDS = = = = = = = = = */
const S = {
  EXPENDITURE: 'expenditure',
  INCOME: 'income',
  CATEGORY: 'category',
  PAYER: 'payer',
  PAYMENT: 'payment',
  SUBSCRIPTION: 'subscription'
}

const W = {
  ID: 'id',
  YEAR: 'year',
  MONTH: 'month',
  DATE: 'date',
  DAY: 'day',
  HOUR: 'hour',
  PRICE: 'price',
  NAME: 'name'
}

const W_ID = (ct) => `${ct}_${W.ID}`

/* = = = = = = = = = SHEETS = = = = = = = = = */

const EXPENDITURE_SHEET = {
  NAME: S.EXPENDITURE,
  LABEL: [
    W.ID,
    W.YEAR,
    W.MONTH,
    W.DATE,
    W.DAY,
    W.HOUR,
    W_ID(S.PAYMENT),
    W.NAME,
    W.PRICE,
    W_ID(S.CATEGORY)
  ]
}

const INCOME_SHEET = {
  NAME: S.INCOME,
  LABEL: [W.ID, W.YEAR, W.MONTH, W.DATE, W.DAY, W.NAME, W.PRICE, W_ID(S.PAYER)]
}

const CATEGORY_SHEET = {
  NAME: S.CATEGORY,
  LABEL: [W.ID, W.YEAR, W.MONTH, W.DATE, W.DAY, W.NAME, 'price', 'payer_id']
}

const PAYER_SHEET = {
  NAME: S.PAYER,
  LABEL: [W.ID, W.YEAR, W.MONTH, W.DATE, W.DAY, W.NAME, 'price', 'payer_id']
}

const PAYMENT_SHEET = {
  NAME: S.PAYMENT,
  LABEL: [W.ID, W.YEAR, W.MONTH, W.DATE, W.DAY, W.NAME, 'price', 'payer_id']
}

const SUBSCRIPTION_SHEET = {
  NAME: S.SUBSCRIPTION,
  LABEL: [W.ID, W.YEAR, W.MONTH, W.DATE, W.DAY, W.NAME, 'price', 'payer_id']
}

/* = = = = = = = = = SEED = = = = = = = = = */

/* = = = = = = = = = = = = = = = = = = = = = = */
/* = = = = = = =  SHEET CLASSSES = = = = = = = */
/* = = = = = = = = = = = = = = = = = = = = = = */
class Sheet {
  /**
   * Create a sheet class
   * @param {string} sheetName - The sheet name
   * @param {string[]} label - The array of labels for the sheet
   */
  constructor(sheetName, label) {
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

  /**
   * Returns the row number of given uuid
   * @param {string} uuid - The unique id
   * @returns {number}
   */
  uuidRowNum(uuid) {
    const lr = this.sheet.getLastRow()
    const rg = this.sheet.getRange(1, 1, lr)
    const vals = rg.getValues()
    const ids = vals.flat()
    if (!ids.includes(uuid)) return 0 // real num start from 1

    const ix = ids.indexOf(uuid)
    const numIx = ix + 1 // index to real number
    return numIx
  }

  /**
   * Convert object to array (only values)
   * @param {Object} obj
   * @returns {any[]}
   */
  obj2arr(obj) {
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

  /**
   * Convert array to object
   * @param {any[]} arr
   * @returns {Object}
   */
  arr2obj(arr) {
    return this.labels.reduce((pr, cu, ix) => ({ ...pr, [cu]: arr[ix] }), {})
  }

  /**
   * Create a row with given data
   * @param {Object} data - Correctly labled data object for the sheet
   */
  create(data) {
    const uuid = Utilities.getUuid()
    const uuided = {
      ...data,
      [UUID_LABEL]: uuid
    }
    const arr = this.obj2arr(uuided)
    this.sheet.appendRow(arr)

    return uuid
  }

  /**
   * Create rows with given data
   * @param {Object[]} data - Correctly labled data object for the sheet
   */
  createMany(data) {}

  /**
   * Find specific item by given column data
   * @param {string} col - The column to look for
   * @param {any} data - The data to match up
   */
  where(col, data) {
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

  /**
   * Find specific item by uuid
   * @param {string} uuid - The unique id for the item
   * @returns {Object|null}
   */
  find(uuid) {
    return this.where(UUID_LABEL, uuid)
  }
  /**
   * Returns all entries in the database
   */
  all() {
    const range = this.sheet.getDataRange()
    const values = range.getValues()
    values.shift() // removes label

    const mapped = values.map((x) => this.arr2obj(x))
    return mapped
  }

  /**
   * Find many entries
   * @param {Object} data - Correctly labled data object for the sheet
   */
  findMany(data) {}

  /**
   * Update the item with given data
   * @param {string} uuid - The unique id for the item
   * @param {Object} data - Correctly labled data object for the sheet
   */
  update(uuid, data) {
    const numIx = this.uuidRowNum(uuid)
    if (numIx === 0) return null // no entry found
    const len = this.labelsLength
    const range = this.sheet.getRange(numIx, 1, 1, len)
    const val = this.obj2arr(data)
    range.setValues([val])
  }
}

/* = = = = = = = = = = = = = = = = = = = = = = */
/* = = = = = = =   INCOME CLASS  = = = = = = = */
/* = = = = = = = = = = = = = = = = = = = = = = */
class Income extends Sheet {
  constructor() {
    const { NAME, LABEL } = super(NAME, LABEL)
  }
}
