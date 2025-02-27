// pages/index/index.js
Page({

 
  gotoPage: function (options) {
      wx.navigateTo({
            url: "/pages/exam/exam",//要跳转到的页面路径
   })  
   },
  
  
  
  
      /**
       * 页面的初始数据
       */
      data: {
  
      },
  
      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {
  
      },
  
      /**
       * 生命周期函数--监听页面初次渲染完成
       */
      onReady: function () {
  
      },
  
      /**
       * 生命周期函数--监听页面显示
       */
      onShow: function () {
  
      },
  
      /**
       * 生命周期函数--监听页面隐藏
       */
      onHide: function () {
  
      },
  
      /**
       * 生命周期函数--监听页面卸载
       */
      onUnload: function () {
  
      },
  
      /**
       * 页面相关事件处理函数--监听用户下拉动作
       */
      onPullDownRefresh: function () {
  
      },
  
      /**
       * 页面上拉触底事件的处理函数
       */
      onReachBottom: function () {
  
      },
  
      /**
       * 用户点击右上角分享
       */
      onShareAppMessage() {
        const promise = new Promise(resolve => {
          setTimeout(() => {
            resolve({
              title: '领航'
            })
          }, 2000)
        })
        return {
          title: '领航',
          path: '/pages/fireTest/fireTest',
          promise 
        }
    
    },
    onShareTimeline(){
    title:'领航'
    imageUrl:'https://636c-cloud1-3gjki39y84ed3d7f-1309384772.tcb.qcloud.la/%E9%A2%86%E8%88%AA/%E5%BE%BD%E7%AB%A0/%E9%A2%86%E8%88%AA%40300x.png'
    },
  })