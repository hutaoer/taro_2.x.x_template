import Taro from "@tarojs/taro";
import { HTTP_STATUS_MAP } from "./httpStatus";

/**
 * 拦截器
 * @param {Object} chain
 * @param {Boolean} chain.requestParams.loading 展示Loading状态，默认true
 * @param {Boolean} chain.requestParams.toast 展示错误，默认true
 * @param {Boolean} chain.requestParams.ignore 是否忽略拦截器，直接返回整个data，默认false
 */
const customInterceptor = function(chain) {
  const { requestParams } = chain;
  const { loading = true, toast = true, ignore = false, url } = requestParams;
  loading &&
    Taro.showLoading({
      mask: true,
    });
  return chain
    .proceed(requestParams)
    .catch((error) => {
      loading && Taro.hideLoading();
      // 浏览器状态
      const statusCode = error.statusCode || error.status;
      const errorMsg = HTTP_STATUS_MAP[statusCode] || "网络错误";
      console.error(errorMsg);
    })
    .then((res) => {
      try {
        loading && Taro.hideLoading();
        if (ignore) return res;
        // 服务器状态
        const { data = null } = res;
        if (data) {
          const { errorCode, errorMsg, code, success } = data;
          const serverCode = +(!validateNull(errorCode) ? errorCode : code);
          if (success) {
            return data;
          } else {
            console.error(errorMsg);
          }
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
};

export default customInterceptor;
