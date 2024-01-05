import {
  SUBSCRIPTION,
  EXPENDITURE,
  CATEGORY,
  PAYMENT,
  INCOME,
  PAYER,
  LOAN
} from '../classes/index'
import { JsonResponse } from './response'

export default function doGet(e: GoogleAppsScript.Events.DoGet) {
  return JsonResponse({
    subscriotion: SUBSCRIPTION.dump(),
    expenditure: EXPENDITURE.dump(),
    category: CATEGORY.dump(),
    payment: PAYMENT.dump(),
    income: INCOME.dump(),
    payer: PAYER.dump(),
    loan: LOAN.dump()
  })
}
