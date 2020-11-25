// import { create } from 'dva-core'
// import {createLogger} from 'redux-logger'
// import createLoading from 'dva-loading'

// function createApp(opt) {
//   opt.onAction = [createLogger()]
//   const app = create(opt)
//   app.use(createLoading())
//   app.start()
//   if (!global.registered) opt.models.forEach(model => app.model(model))
//   global.registered = true
//   app.getStore = () => app._store
//   return app
// }

// export default {
//   createApp
// }

import { create } from 'dva-core'
// import { createLogger } from 'redux-logger'
import createLoading from 'dva-loading'

let app
let store
let dispatch

function createApp(opt) {
  opt.onError = error => {
    console.error(error)
  } 
  app = create(opt)
  app.use(createLoading({}))

  if (!global.registered) opt.models.forEach(model => app.model(model))
  global.registered = true
  app.start()

  store = app._store
  app.getStore = () => store

  dispatch = store.dispatch

  app.dispatch = dispatch
  return app
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  },
}
