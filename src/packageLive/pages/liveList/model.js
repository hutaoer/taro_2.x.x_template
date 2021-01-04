import Taro, { Component } from "@tarojs/taro";
import API from "@/utils/request";
export default {
  namespace: "liveList",
  state: {
    title: "直播列表",
    list: [],
  },
  effects: {
    *fetchData({ payload, callback }, { call, put }) {
      const res = yield call(() => {
        return API.get("/api/live/list");
      }, {});
      yield put({
        type: "save",
        payload: {
          list: res.data.result,
        },
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};