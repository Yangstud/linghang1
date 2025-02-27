// app.js
App({
  onLaunch(){
    console.log('小程序启动了')
    wx.cloud.init({
      env: 'cloudbase-3gujsarofca6464e', // Fix the typo in 'env' and use the correct environment ID
      traceUser: true // Add traceUser for better debugging
    })
  },
  globalData:{
    nickName: null
  }
})
