/* = = = = = = = = = = = = = = = = = = = = = = */
/* = = = = = = =    CONSTANTS    = = = = = = = */
/* = = = = = = = = = = = = = = = = = = = = = = */

const NOTIFICATION = true
const CONTACT_NAME = 'CONTACT_FORM'
const NOTIFICATION_NAME = 'NOTIFICATION'
const TITLE = 'お問い合わせを受け付けました'
const MESSAGE = '下記内容でお問い合わせを受け付けました： '
const SPREAD_ID = '1FIUZWcxbztU5TJMeZ41qxyAbuEBX9mIOI23t6gQ0NXE'
const DEV = 'kentozuka22@gmail.com'

/* = = = = = = = = = WORDS = = = = = = = = = */
const S = {
  EXPENDITURE: 'expenditure',
  INCOME: 'income',
  CATEGORY: 'category',
  PAYER: 'payer',
  PAYMENT: 'payment',
  SUBSCRIPTION: 'subscription'
}

const W = {
  ID: 'id',
  YEAR: 'year',
  MONTH: 'month',
  DATE: 'date',
  DAY: 'day',
  HOUR: 'hour',
  PRICE: 'price',
  NAME: 'name'
}

const W_ID = (ct) => `${ct}_${W.ID}`

/* = = = = = = = = = SHEETS = = = = = = = = = */

const EXPENDITURE_SHEET = {
  NAME: S.EXPENDITURE,
  LABEL: [
    W.ID,
    W.YEAR,
    W.MONTH,
    W.DATE,
    W.DAY,
    W.HOUR,
    W_ID(S.PAYMENT),
    W.NAME,
    W.PRICE,
    W_ID(S.CATEGORY)
  ]
}

const INCOME_SHEET = {
  NAME: S.INCOME,
  LABEL: [W.ID, W.YEAR, W.MONTH, W.DATE, W.DAY, W.NAME, W.PRICE, W_ID(S.PAYER)]
}

const CATEGORY_SHEET = {
  NAME: S.CATEGORY,
  LABEL: [W.ID, W.YEAR, W.MONTH, W.DATE, W.DAY, W.NAME, 'price', 'payer_id']
}

const PAYER_SHEET = {
  NAME: S.PAYER,
  LABEL: [W.ID, W.YEAR, W.MONTH, W.DATE, W.DAY, W.NAME, 'price', 'payer_id']
}

const PAYMENT_SHEET = {
  NAME: S.PAYMENT,
  LABEL: [W.ID, W.YEAR, W.MONTH, W.DATE, W.DAY, W.NAME, 'price', 'payer_id']
}

const SUBSCRIPTION_SHEET = {
  NAME: S.SUBSCRIPTION,
  LABEL: [W.ID, W.YEAR, W.MONTH, W.DATE, W.DAY, W.NAME, 'price', 'payer_id']
}

/* = = = = = = = = = SEED = = = = = = = = = */
