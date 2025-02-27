// pages/VSDetailVideo/VSDetailVideo.js
// let index=null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nextStation: false,
    outStation: false,
    currentVideo: '',
    videoList:[],
    name:'',
    index:null,
    userInfo:{} 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let user = wx.getStorageSync("user")
    this.setData({
      userInfo:user
    })
    console.log(options)
    wx.get
    this.setData({
      currentVideo: options.videoLink,
      name: options.name,
      index: Number(options.index)
    })
    // index=options.index
    //获取视频数组
    wx.cloud.callFunction({
      name: 'getVScityVideos',
      data: {
        city: options.name
      }
    }).then(res => {
      // console.log('getVScityVideos请求成功',res)
      console.log(res.result.data[0].videoLinkList)
      this.setData({
        videoList: res.result.data[0].videoLinkList
      })
    }).catch(err => {
      console.log('getVScityVideos请求失败', err)
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
  //视频结束时
  goend() {
    wx.cloud.callFunction({
      name:'updateVSProg',
      data:{
        index:this.data.index,
        cityname:'VS'+this.data.name,
        nickName:this.data.userInfo.nickName
      }
    })
    this.setData({
      nextStation: true,
      outStation: true
    })
  },
  goNextStation() {
    console.log('index:',this.data.index)
    console.log('num',this.data.videoList.length)
    let index = this.data.index + 1
    if (index < this.data.videoList.length) {
      wx.redirectTo({
        url: '/pages/VSDetailVideo/VSDetailVideo?index=' + index + '&name=' + this.data.name  +
          '&videoLink=' + this.data.videoList[index],
      })
    } else if (index >= this.data.videoList.length) {
      wx.showToast({
        title: '此线路已达终点',
      })
    }
  },
  goOut(){
    wx.reLaunch({
      url: '/pages'+'/'+this.data.name+'/'+this.data.name,
    }).catch(err=>{
      console.log('出站失败',err)
    })
  },
})