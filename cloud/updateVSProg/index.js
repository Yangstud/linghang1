// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ //云环境初始化
  env: cloud.DYNAMIC_CURRENT_ENV //获取当前云环境id
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  if (event.index == 0) {
    cloud.database().collection(event.cityname).where({
      nickName: event.nickName,
    }).update({
      data: {
        first: true
      }
    })
  } else if (event.index == 1) {
    cloud.database().collection(event.cityname).where({
      nickName: event.nickName,
    }).update({
      data: {
        second: true
      }
    })
  } else if (event.index == 2) {
    cloud.database().collection(event.cityname).where({
      nickName: event.nickName,
    }).update({
      data: {
        third: true
      }
    })
  } else if (event.index == 3) {
    cloud.database().collection(event.cityname).where({
      nickName: event.nickName,
    }).update({
      data: {
        fourth: true
      }
    })
  } else if (event.index == 4) {
    cloud.database().collection(event.cityname).where({
      nickName: event.nickName,
    }).update({
      data: {
        fifth: true
      }
    })
  } else if (event.index == 5) {
    cloud.database().collection(event.cityname).where({
      nickName: event.nickName,
    }).update({
      data: {
        sixth: true
      }
    })
  } else if (event.index == 6) {
    cloud.database().collection(event.cityname).where({
      nickName: event.nickName,
    }).update({
      data: {
        seventh: true
      }
    })
  } else if (event.index == 7) {
    cloud.database().collection(event.cityname).where({
      nickName: event.nickName,
    }).update({
      data: {
        eighth: true
      }
    })
  } else if (event.progress == 100) {
    cloud.database().collection(event.cityname).where({
      nickName: event.nickName,
    }).update({
      data: {
        progress: 100
      }
    })
  } else {

  }
  return cloud.database().collection(event.cityname).where({
    nickName: event.nickName
  }).get()
}