import { CategoryDataType, PayerDataType, PaymentDataType } from './types/index'

/* = = = = = = = = = = = = = = = = = = = = = = */
/* = = = = = = =    CONSTANTS    = = = = = = = */
/* = = = = = = = = = = = = = = = = = = = = = = */

export const SHEET_ID = '18xE9SIrzZEZ-Ld-QqlGRLTxpNu5LLf84z3QgAqXtdH4'

/* = = = = = = =    SEEDS    = = = = = = = */
export const CATEGORY_SEED: CategoryDataType[] = [
  { name: '食材費' },
  { name: '間食費' },
  { name: '外食費' },
  { name: '日用品費' },
  { name: '被服費' },
  { name: '医療費' },
  { name: '教養娯楽費' },
  { name: '通信費' },
  { name: '水道光熱費' },
  { name: '住居費' },
  { name: '美容費' },
  { name: '交際費' },
  { name: '移動費' },
  { name: '特別費' },
  { name: '雑費' }
]

export const PAYMENT_SEED: PaymentDataType[] = [
  { name: '現金' },
  { name: 'QRコード決済' },
  { name: 'クレジットカード' },
  { name: '交通系' },
  { name: 'デビットカード' },
  { name: '銀行振り込み' }
]

export const PAYER_SEED: PayerDataType[] = [
  { name: 'イントロダクション' },
  { name: 'SIDE HUSTLE' },
  { name: 'もらい金' }
]
