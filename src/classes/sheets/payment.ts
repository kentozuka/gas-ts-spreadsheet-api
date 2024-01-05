import { PayerDataType } from '../../types/index'
import Sheet, { SheetInfo } from './template'

const sheetInfo: SheetInfo<PayerDataType> = {
  name: 'payment',
  label: ['name'],
  styling: {
    tabColor: '',
    backgroundColor: '',
    fontColor: ''
  }
}

export default class Payer extends Sheet<PayerDataType> {
  constructor(id: string) {
    super(id, sheetInfo)
  }
}
