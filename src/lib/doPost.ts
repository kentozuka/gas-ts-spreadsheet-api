import { ExpenditureDataType, IncomeDataType } from '../types/index'
import { INCOME, EXPENDITURE } from '../classes/index'
import { ErrorResponse } from './response'

interface PossiblePostJson {
  type?: 'income' | 'expenditure'
  data?: IncomeDataType | ExpenditureDataType
}

const isIncomeDataType = (data: any): data is IncomeDataType => {
  return data
}

const isExpenditureDataType = (data: any): data is ExpenditureDataType => {
  return data
}

export default function doPost(e: GoogleAppsScript.Events.DoPost) {
  const json = JSON.parse(e.postData.contents) as PossiblePostJson

  if (!json.type) return ErrorResponse('Missing type')

  const type = json.type
  if (!['income', 'expenditure'].includes(type))
    return ErrorResponse('incorrect type')

  const data = json.data
  if (type === 'income' && isIncomeDataType(data)) INCOME.append([data])
  if (type === 'expenditure' && isExpenditureDataType(data))
    EXPENDITURE.append([data])
}
