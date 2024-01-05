export interface ExpenditureDataType {
  year: number
  month: number
  date: number
  day: number
  hour: number
  payment_id: string
  name: string
  price: number
  category_id: string
}

export interface IncomeDataType {
  year: number
  month: number
  date: number
  day: number
  name: string
  price: number
  payer_id: string
}

export interface CategoryDataType {
  name: string
}

export interface PayerDataType {
  name: string
}

export interface PaymentDataType {
  name: string
}

export interface SubscriptionDataType {
  name: string
  interval: number
  amount: number
  note: string
}

export interface LoanDataType {
  name: string
  interval: number
  amount: number
  note: string
}
