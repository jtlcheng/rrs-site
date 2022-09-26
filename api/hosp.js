import request from "@/utils/request";

const api_name="/api/hosp/hospital"
export default {
  //查询医院列表
  getPageList(page,limit,searchObj){
    return request({
      url: `${api_name}/findHospList/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  //根据医院名称模糊查询
  getByHosname(hosname){
    return request({
      url: `${api_name}/findHospName/${hosname}`,
      method: 'get'
    })
  },
  //根据医院编号获取医院挂号预约详情
  show(hoscode){
    return request({
      url: `${api_name}/findHospDetail/${hoscode}`,
      method: 'get'
    })
  },
  //根据医院编号获取科室
  findDepartment(hoscode){
    return request({
      url: `${api_name}/department/${hoscode}`,
      method: 'get'
    })
  },
  //获取可预约排班数据
  getBookingSchedule(page,limit,hoscode,depcode){
    return request({
      url: `${api_name}/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
      method: 'get'
    })
  },
  //获取排班数据
  findScheduleList(hoscode,depcode,workDate){
    return request({
      url: `${api_name}/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`,
      method: 'get'
    })
  },
  //根据排班id获取排班数据
  getSchedule(scheduleId){
    return request({
      url: `${api_name}/auth/getSchedule/${scheduleId}`,
      method: 'get'
    })
  }
}
