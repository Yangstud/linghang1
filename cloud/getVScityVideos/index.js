// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ //云环境初始化
  env: cloud.DYNAMIC_CURRENT_ENV //获取当前云环境id
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return cloud.database().collection('VSvideoList').where({city:event.city}).get()
}