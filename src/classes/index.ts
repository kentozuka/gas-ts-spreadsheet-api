import { SHEET_ID } from '../constant'

import Subscription from './sheets/subscription'
import Expenditure from './sheets/expenditure'
import Category from './sheets/category'
import Payment from './sheets/payment'
import Income from './sheets/income'
import Payer from './sheets/payer'
import Loan from './sheets/loan'

export const SUBSCRIPTION = new Subscription(SHEET_ID)
export const EXPENDITURE = new Expenditure(SHEET_ID)
export const CATEGORY = new Category(SHEET_ID)
export const PAYMENT = new Payment(SHEET_ID)
export const INCOME = new Income(SHEET_ID)
export const PAYER = new Payer(SHEET_ID)
export const LOAN = new Loan(SHEET_ID)
