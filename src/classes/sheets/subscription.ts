import { SubscriptionDataType } from '../../types/index'
import Sheet, { SheetInfo } from './template'

const sheetInfo: SheetInfo<SubscriptionDataType> = {
  name: 'subscription',
  label: ['name', 'interval', 'amount', 'note'],
  styling: {
    tabColor: '#fbbc04',
    backgroundColor: '#fbbc04',
    fontColor: '#fff'
  }
}

export default class Subscription extends Sheet<SubscriptionDataType> {
  constructor(id: string) {
    super(id, sheetInfo)
  }
}
