import Taro, { Component } from '@tarojs/taro'
import API from '@/utils/request'
export default {
  namespace: 'home',
  state: {
    title: '首页'
  },
  effects: {
    *fetchData({payload, callback}, {call, put}) {
      // const res = yield call(Taro.request({
      //   url: '/api/user/1',
      //   method: 'GET',
      //   mode: 'cors',
      //   data: {},
      //   header: {
      //     'content-type': 'application/json'
      //   }
      // }))
      const res = yield call(()=> {return API.get('/api/user/1')}, {})
      console.log(res)
    }
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload}
    }
  }
}