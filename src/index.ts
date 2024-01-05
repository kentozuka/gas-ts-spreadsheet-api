import { initialize } from './lib/seed'
import doPost from './lib/doPost'
import doGet from './lib/doGet'

global.seed = initialize
global.doPost = doPost
global.doGet = doGet
