import request from "@/utils/request";

const api_name="/api/ucenter/wx"
export default {
  //生成微信二维码
  genQrConnect(){
    return request({
      url: `${api_name}/getLoginParam`,
      method: 'get'
    })
  }
}
