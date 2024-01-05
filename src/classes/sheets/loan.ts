import { LoanDataType } from '../../types/index'
import Sheet, { SheetInfo } from './template'

const sheetInfo: SheetInfo<LoanDataType> = {
  name: 'loan',
  label: ['name', 'interval', 'amount', 'note'],
  styling: {
    tabColor: '#a319ff',
    backgroundColor: '#a319ff',
    fontColor: '#fff'
  }
}

export default class Loan extends Sheet<LoanDataType> {
  constructor(id: string) {
    super(id, sheetInfo)
  }
}
