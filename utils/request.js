import axios from 'axios'
import {MessageBox, Message} from 'element-ui'
import cookie from "js-cookie";
//创建axios实例
const service = axios.create({
  baseURL: 'http://localhost',
  timeout: 15000//请求超时时间
})
//httprequest拦截器
service.interceptors.request.use(
  config => {
    //token先不处理，后续使用时在完善
    //判断cookie是否有token值
    if (cookie.get('token')){
      //token值放到cookie里面去
      config.headers['token']=cookie.get('token')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })
//httpresponse拦截器
service.interceptors.response.use(
  response => {
    //状态码是208
    if (response.data.code===208){
      //弹出登录输入框
      loginEvnet.$emit('loginDialogEvent')
      return
    }else {
      if (response.data.code !== 200) {
        Message({
          message: response.data.message,
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject(response.data)
      } else {
        return response.data
      }
    }
  },
  error => {
    return Promise.reject(error.response)
  })
export default service
