import { IncomeDataType } from '../../types/index'
import Sheet, { SheetInfo } from './template'

const sheetInfo: SheetInfo<IncomeDataType> = {
  name: 'income',
  label: ['year', 'month', 'date', 'day', 'name', 'price', 'payer_id'],
  styling: {
    tabColor: '#289c04',
    backgroundColor: '#289c04',
    fontColor: '#fff'
  }
}

export default class Income extends Sheet<IncomeDataType> {
  constructor(id: string) {
    super(id, sheetInfo)
  }
}
