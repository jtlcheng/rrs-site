import request from "@/utils/request";

const api_name = `api/order/orderInfo`

export default {
  //创建订单
  submitOrder(scheduleId, patientId) {
    return request({
      url: `${api_name}/auth/submitOrder/${scheduleId}/${patientId}`,
      method: 'post'
    })
  },
  //订单列表
  list(page,limit,searchObj) {
    return request({
      url: `${api_name}/auth/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  //订单状态
  getAuthStatusList(){
    return request({
      url: `${api_name}/auth/getAuthStatusList`,
      method: 'get'
    })
  },
  //获取订单详情根据id
  getOrders(orderId){
    return request({
      url: `${api_name}/auth/getOrders/${orderId}`,
      method: 'get'
    })
  },
  //取消订单
  cancelOrder(orderId){
    return request({
      url: `${api_name}/auth/cancelOrder/${orderId}`,
      method: 'get'
    })
  }
}
