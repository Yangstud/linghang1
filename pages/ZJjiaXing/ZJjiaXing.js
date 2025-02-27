// pages/ZJjiaXing/ZJjiaXing.js
const app=getApp()
Page({

  /** 
   * 页面的初始数据
   */
  data: {
    sign1:false,
    sign2:false,
    name:'ZJjiaXing',
    videoList:[],
    progress:0,
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //获取用户登录状态
    let user = wx.getStorageSync("user")
    this.setData({
      userInfo:user
    })
    console.log(user)
    // console.log(options.name)
    // this.setData({
    //   name:options.name
    // })
    //传送视频链接，跳转页面
    wx.cloud.callFunction({
      name:'getVScityVideos',
      data:{city:this.data.name}
    }).then(res=>{
      // console.log('getVScityVideos请求成功',res)
      console.log(res.result.data[0].videoLinkList)
      this.setData({
        videoList:res.result.data[0].videoLinkList
      })
    }).catch(err=>{
      console.log('getVScityVideos请求失败',err)
    })
    //查询获取进度，标记
    wx.cloud.callFunction({
      name:'updateVSProg',
      data:{
        cityname:'VSZJjiaXing',
        nickName:this.data.userInfo.nickName
      }
    }).then(res=>{
      console.log('updateVSProg查询成功',res)
      // console.log(res.result.data[0].first)
      if(res.result.data[0].first==true){
        let a=100 / 2
        this.setData({
          sign1:true,
          progress:this.data.progress+a
        })

      }

       if(res.result.data[0].second==true){
        let a=100 / 2
        this.setData({
          sign2:true,
          // progress:this.data.progress+a
          progress:parseFloat(this.data.progress+a).toFixed(2)
        })
        let progress=this.data.progress
        console.log(progress)
        if(progress >= 99){
          wx.cloud.callFunction({
            name:'updateVSProg',
          data:{
            progress:100,
            cityname:'VSZJjiaXing',
            nickName:this.data.userInfo.nickName
          }}).then(res=>{
            console.log('进度上传成功',res)
            wx.cloud.callFunction({
              name: 'VSAA',
              data: {
                index: 5,
                nickName: this.data.userInfo.nickName,
                achievement: 'VSachievement'
              }
            }).then(res2 => {
              console.log('VSAA请求成功', res2)
            }).catch(err2 => {
              console.log('VSAA请求失败', err2)
            })
          }).catch(err=>{
            console.log('进度上传失败',err)
          })
        }
      }
    }).catch(err=>{
      console.log('updateVSProg查询失败',err)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  //跳转第一站
  go1(){
    wx.navigateTo({
      url: '/pages/VSDetailVideo/VSDetailVideo?videoLink='+this.data.videoList[0]+'&name='+this.data.name
      +'&index=0',
    })
  },
  go2(){
    wx.navigateTo({
      url: '/pages/VSDetailVideo/VSDetailVideo?videoLink='+this.data.videoList[1]+'&name='+this.data.name
      +'&index=1',
    })
  },

})