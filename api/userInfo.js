import request from "@/utils/request";
const api_name=`/api/user`;
export default {
  //用户手机号登录
  toLogin(userInfo){
    return request({
      url:`${api_name}/login`,
      method: 'post',
      data: userInfo
    })
  }
}
