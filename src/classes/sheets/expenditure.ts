import { ExpenditureDataType } from '../../types/index'
import Sheet, { SheetInfo } from './template'

const sheetInfo: SheetInfo<ExpenditureDataType> = {
  name: 'expenditure',
  label: [
    'year',
    'month',
    'date',
    'day',
    'hour',
    'payment_id',
    'name',
    'price',
    'category_id'
  ],
  styling: {
    tabColor: '#cd0000',
    backgroundColor: '#cd0000',
    fontColor: '#fff'
  }
}

export default class Expenditure extends Sheet<ExpenditureDataType> {
  constructor(id: string) {
    super(id, sheetInfo)
  }
}
