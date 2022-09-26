import request from "@/utils/request";

const api_name="/api/patient"
export default {
  //获取就诊人列表
  findPatientList(){
    return request({
      url: `${api_name}/auth/findAllList`,
      method: 'get'
    })
  },
  //添加就诊人
  savePatient(searchObj){
    return request({
      url: `${api_name}/auth/savePatient`,
      method: 'post',
      data: searchObj
    })
  },
  //根据id获取就诊人信息
  getPatientId(id){
    return request({
      url: `${api_name}/auth/get/${id}`,
      method: 'get'
    })
  },
  //修改就诊人
  updatePatient(searchObj){
    return request({
      url: `${api_name}/auth/updatePatient`,
      method :'post',
      data: searchObj
    })
  },
  //删除就诊人
  removePatient(id){
    return request({
      url: `${api_name}/auth/removePatient/${id}`,
      method: 'get'
    })
  }

}
