import { create } from 'dva-core'
import {createLogger} from 'redux-logger'
import createLoading from 'dva-loading'

function createApp(opt) {
  opt.onAction = [createLogger()]
  const app = create(opt)
  app.use(createLoading())
  app.start()
  app.getStore = () => app._store
}

export default {
  createApp
}