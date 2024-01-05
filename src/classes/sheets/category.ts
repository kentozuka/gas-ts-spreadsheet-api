import { CategoryDataType } from '../../types/index'
import Sheet, { SheetInfo } from './template'

const sheetInfo: SheetInfo<CategoryDataType> = {
  name: 'category',
  label: ['name'],
  styling: {
    tabColor: '#356dea',
    backgroundColor: '#356dea',
    fontColor: '#ffffff'
  }
}

export default class Category extends Sheet<CategoryDataType> {
  constructor(id: string) {
    super(id, sheetInfo)
  }
}
