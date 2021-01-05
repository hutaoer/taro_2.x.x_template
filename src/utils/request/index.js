import Taro from "@tarojs/taro";
import customInterceptor from "./customInterceptor";
import { IS_DEV, IS_MOCK, IS_LOCAL, IS_WEB, genApi } from "@/utils/env/";

Taro.addInterceptor(customInterceptor);
// 非生产环境，开启log
if (IS_DEV) {
  // 打印请求的相关信息和在请求超时时抛出错误
  Taro.addInterceptor(Taro.interceptors.logInterceptor);
  Taro.addInterceptor(Taro.interceptors.timeoutInterceptor);
}

const genBaseUrl = (url) => {
  if (IS_MOCK) return "http://localhost:3000";
  if (IS_LOCAL && IS_WEB) return "/api";

  const prefix = url.split("/")[1];

  return `${genApi(prefix)}/api`;
};

export default {
  baseOptions(params, method = "GET", options = {}) {
    let { url, data = {} } = params;
    let contentType = "application/json";
    contentType = options.contentType || contentType;
    delete options.contentType;
    const option = {
      // url,
      url: ~url.indexOf("http") ? url : `${genBaseUrl(url)}${url}`,
      data,
      method: method,
      header: {
        "content-type": contentType,
      },
      mode: "cors",
      cache: "no-cache",
      ...options,
    };
    return Taro.request(option);
  },
  get(url, data = "", options) {
    let params = { url, data };
    return this.baseOptions(params, "GET", options);
  },
  post(url, data, options) {
    let params = { url, data };
    return this.baseOptions(params, "POST", options);
  },
};
