interface SheetStyling {
  tabColor?: string
  fontColor?: string
  backgroundColor?: string
}

export interface SheetInfo<SheetDataType> {
  name: string
  label: Array<keyof SheetDataType>
  styling?: SheetStyling
}

type SpreadSheet = GoogleAppsScript.Spreadsheet.Spreadsheet
type GSheet = GoogleAppsScript.Spreadsheet.Sheet

const ID = 'id' as const
const CREATED_AT = 'created_at' as const
const UPDATED_AT = 'updated_at' as const

type CommonFields = {
  [ID]: typeof ID
  [UPDATED_AT]: typeof UPDATED_AT
  [CREATED_AT]: typeof CREATED_AT
}

export default class Sheet<SheetDataType> {
  private _spread: SpreadSheet
  private _sheet: GSheet
  sheetInfo: SheetInfo<SheetDataType>

  constructor(spreadsheetId: string, data: SheetInfo<SheetDataType>) {
    this.sheetInfo = data
    this._spread = SpreadsheetApp.openById(spreadsheetId)
    this._sheet = this.accessSheet()
  }

  private get header() {
    const len = this.sheetInfo.label.length + 3 // CommonFields
    const range = this._sheet.getRange(1, 1, 1, len)
    return range
  }

  private get labels() {
    const headers = [ID, ...this.sheetInfo.label, UPDATED_AT, CREATED_AT] as (
      | keyof CommonFields
      | keyof SheetDataType
    )[]
    return headers
  }

  private get lastRow() {
    return this._sheet.getLastRow()
  }

  private get lastColumn() {
    return this.labels.length
  }

  get isClean() {
    return this.lastRow === 1 // only label
  }

  private applyStyling() {
    const { styling } = this.sheetInfo

    this._sheet.setFrozenRows(1)

    if (!styling) return
    if (styling.tabColor) this._sheet.setTabColor(styling.tabColor)
    if (styling.fontColor) this.header.setFontColor(styling.fontColor)
    if (styling.backgroundColor)
      this.header.setBackground(styling.backgroundColor)
  }

  private applyLabeling() {
    this.header.setValues([this.labels])
    this._sheet.deleteRows(11, 989)
    this._sheet.deleteColumns(this.lastColumn + 1, 26 - this.lastColumn)
  }

  private createSheet() {
    const { name } = this.sheetInfo
    this._sheet = this._spread.insertSheet(name)
    this.applyStyling()
    this.applyLabeling()

    console.log(`Created Sheet: ${this.sheetInfo.name}`)
  }

  private accessSheet() {
    this._sheet = this._spread.getSheetByName(this.sheetInfo.name)
    if (this._sheet === null) this.createSheet()

    return this._sheet
  }

  private arr2obj(arr: any[]) {
    return this.labels.reduce((obj, label, index) => {
      obj[label] = arr[index]
      return obj
    }, {} as SheetDataType & CommonFields)
  }

  private validate(data: any): data is SheetDataType {
    const requiredFields: Array<keyof SheetDataType> = this.sheetInfo.label

    for (const field of requiredFields) {
      if (!(field in data)) return false
    }

    return true
  }

  private format(data: SheetDataType[]) {
    return data.map((cell, ix) => [
      this.lastRow + ix,
      ...Object.values(cell as Record<string, any>),
      new Date(), // updated_at
      new Date() // created_at
    ])
  }

  initialize() {
    this.accessSheet()
  }

  dump() {
    const range = this._sheet.getDataRange()
    const values = range.getValues()
    values.shift() // Removes the label row

    const mapped = values.map((x) => this.arr2obj(x))
    return mapped
  }

  append(data: SheetDataType[]) {
    const validatedData = data.filter((x) => this.validate(x))
    const values = this.format(validatedData)

    const range = this._sheet.getRange(
      this.lastRow + 1,
      1,
      values.length,
      this.labels.length
    )
    range.setValues(values)
  }

  update(id: string, label: keyof SheetDataType, value: string) {
    const labelIndex = this.labels.indexOf(label)
    // label doesn't exist
    if (labelIndex == -1) return null

    const idRnage = this._sheet.getRange(1, 1, this.lastRow, 1)
    const ids = idRnage.getValues().flat()
    const idIndex = ids.indexOf(id)
    // id doesn't exist
    if (idIndex === -1) return null

    this._sheet.getRange(idIndex + 1, labelIndex + 1).setValue(value)
    this._sheet.getRange(idIndex + 1, this.lastColumn - 1).setValue(new Date())
  }
}
