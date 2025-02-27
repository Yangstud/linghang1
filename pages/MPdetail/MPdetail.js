// pages/MPdetail/MPdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    memberInfo:{},
    name: '',
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options.name)
    //获取登录状态
    let user = wx.getStorageSync("user")
    this.setData({
      userInfo:user
    })
    this.setData({
      name: options.name
    })
    wx.cloud.callFunction({
        name: 'MPDetailSearch',
        data: {
          name: this.data.name
        }
      })
      .then(res => {
        console.log('MPDetailSearch请求成功', res.result.data[0])
        this.setData({
          memberInfo:res.result.data[0]
        })
      }).catch(err => {
        console.log('MPDetailSearch请求失败', err)
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
  updatedata1(){
    console.log('视频结尾',this.data.name)
    if(this.data.name=='王为林'){
      wx.cloud.callFunction({
        name:'VSAA',
        data:{
          index: 100,
          nickName: this.data.userInfo.nickName,
          achievement: 'MPachievement'
        }
      }).then(res2=>{
        console.log('VSAA请求成功',res2)
      }).catch(err2=>{
        console.log('VSAA请求失败',err2)
      })
    }else if (this.data.name=='蔡锡瑶'){
      wx.cloud.callFunction({
        name:'VSAA',
        data:{
          index: 101,
          nickName: this.data.userInfo.nickName,
          achievement: 'MPachievement'
        }
      }).then(res2=>{
        console.log('VSAA请求成功',res2)
      }).catch(err2=>{
        console.log('VSAA请求失败',err2)
      })
    }
  }
})