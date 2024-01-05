import { CATEGORY_SEED, PAYER_SEED, PAYMENT_SEED, SHEET_ID } from '../constant'

import {
  SUBSCRIPTION,
  EXPENDITURE,
  CATEGORY,
  PAYMENT,
  INCOME,
  PAYER,
  LOAN
} from '../classes/index'

export function initialize() {
  SUBSCRIPTION.initialize()
  EXPENDITURE.initialize()
  INCOME.initialize()
  LOAN.initialize()
  if (CATEGORY.isClean) CATEGORY.append(CATEGORY_SEED)
  if (PAYMENT.isClean) PAYMENT.append(PAYMENT_SEED)
  if (PAYER.isClean) PAYER.append(PAYER_SEED)
}
