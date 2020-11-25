import Taro from '@tarojs/taro'
export default {
  baseOptions(params, method = 'GET', options = {}) {
    let { url, data = {} } = params
    let contentType = 'application/json'
    contentType = options.contentType || contentType
    delete options.contentType
    const option = {
      url,
      // url: ~url.indexOf('http') ? url : `${genBaseUrl(url)}${url}`,
      data,
      method: method,
      header: {
        'content-type': contentType,
      },
      mode: 'cors',
      cache: 'no-cache',
      ...options,
    }
    return Taro.request(option)
  },
  get(url, data = '', options) {
    let params = { url, data }
    return this.baseOptions(params, 'GET', options)
  },
  post(url, data, options) {
    let params = { url, data }
    return this.baseOptions(params, 'POST', options)
  },
}