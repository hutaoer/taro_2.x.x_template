import Taro from "@tarojs/taro";

// 是否小程序环境
export const IS_WEAPP = Taro.getEnv() === Taro.ENV_TYPE.WEAPP;

// 是否h5环境
export const IS_WEB = Taro.getEnv() === Taro.ENV_TYPE.WEB;

// 当前启动环境
const ENV_RUNTIME = process.env.TARO_APP_API;

// process.env
// 本地开发: NODE_ENV === 'development'，对应API环境：dev pre pro，其中H5是浏览器环境因此需要走代理，本地走proxy代理，线上走nginx代理，因此不带域名；weapp自带跨域处理/白名单，因此返回全连接即可
// 线上打包: NODE_ENV === 'production'，对应API环境：dev pre pro
export const IS_LOCAL = process.env.NODE_ENV === "development";
export const IS_PRO = ENV_RUNTIME === "pro";
export const IS_FAT = ENV_RUNTIME === "fat";
export const IS_DEV = ENV_RUNTIME === "dev";
export const IS_MOCK = ENV_RUNTIME === "mock";

// 是否微信浏览器环境
export const IS_WX_BROWSER = () => {
  if (!navigator) return false;
  const ua = navigator && navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
};

/**
 * @method 获取系统平台
 * @returns {String} os
 */
export const getOS = () => {
  var u = navigator && navigator.userAgent;
  if (u) {
    if (!!u.match(/compatible/i) || u.match(/Windows/i)) {
      return "windows";
    } else if (!!u.match(/Macintosh/i) || u.match(/MacIntel/i)) {
      return "macOS";
    } else if (!!u.match(/iphone/i) || u.match(/Ipad/i)) {
      return "ios";
    } else if (!!u.match(/android/i)) {
      return "android";
    } else {
      return "other";
    }
  }
};

// 公司名称
const COMPANY_NAME = "demo";

const devApiMap = {
  live: `https://dev-live.${COMPANY_NAME}.com`,
  member: `https://dev-member.${COMPANY_NAME}.com`,
  product: `https://dev-product.${COMPANY_NAME}.com`,
  trade: `https://dev-trade.${COMPANY_NAME}.com`,
};

const fatApiMap = {
  live: `https://fat-live.${COMPANY_NAME}.com`,
  member: `https://fat-member.${COMPANY_NAME}.com`,
  product: `https://fat-product.${COMPANY_NAME}.com`,
  trade: `https://fat-trade.${COMPANY_NAME}.com`,
};

const apiMap = {
  live: `https://live.${COMPANY_NAME}.com`,
  member: `https://member.${COMPANY_NAME}.com`,
  product: `https://product.${COMPANY_NAME}.com`,
  trade: `https://fat-trade.${COMPANY_NAME}.com`,
};

export const genApi = (prefix) => {
  switch (ENV_RUNTIME) {
    case "dev": {
      return devApiMap[prefix];
    }
    case "fat": {
      return fatApiMap[prefix];
    }
    case "pro": {
      return apiMap[prefix];
    }
    default: {
      return apiMap[prefix];
    }
  }
};
