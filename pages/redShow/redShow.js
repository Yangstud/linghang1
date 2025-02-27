// pages/redShow/redShow.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    videoList: [],
    recommendSearchList: [],
    searchPage: false,
    defaultPage: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //搜索时的页面
    wx.cloud
      .callFunction({
        name: "redShowGetVideos",
      })
      .then((res) => {
        this.setData({
          recommendSearchList: res.result.data,
        }); 
      })
      .catch((err) => {
        console.log("redShowGetVideos云函数请求失败", err);
      });
      //分页初始请求
      wx.cloud
      .callFunction({
        name: "redShowFenYe",
        data:{
          lim:4,
          num:0
        }
      })
      .then((res) => {
        this.setData({
          videoList: res.result.data
        }); 
        // console.log('分页云函数请求成功',this.data.videoListFenYe)
      })
      .catch((err) => {
        console.log("fenye云函数请求", err);
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {//分页功能
    let num = this.data.videoList.length
    wx.cloud
    .callFunction({
      name: "redShowFenYe",
      data:{
        lim:4,
        num:num
      }
    })
    .then((res) => {
      this.setData({
        videoList: this.data.videoList.concat(res.result.data)
      }); 
      // console.log('onReachBottom',res.result.data)
      // console.log('分页云函数请求成功',this.data.videoListFenYe)
      if (res.result.data.length==0){
        wx.showToast({
          title: "已经到底了",
          icon: "none",
          image: "",
          duration: 1000,
          mask: false,
          success: (result) => {},
          fail: () => {},
        });
      }
    })
    .catch((err) => {
      console.log("fenye云函数请求失败", err);
    });
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
      path: '/pages/redShow/redShow',
      promise 
    }

},
onShareTimeline(){
title:'领航'
imageUrl:'https://636c-cloud1-3gjki39y84ed3d7f-1309384772.tcb.qcloud.la/%E9%A2%86%E8%88%AA/%E5%BE%BD%E7%AB%A0/%E9%A2%86%E8%88%AA%40300x.png'
},
  search(e) {
    let db = wx.cloud.database();
    const _ = db.command;

    console.log("输入的内容", e.detail.value);
    wx.cloud
      .database()
      .collection("VideoList")
      .where({
        title: db.RegExp({
          //要搜索的域名
          regexp: e.detail.value, //要搜索的字段
          options: "i", //不区分大小写
        }),
      })
      .get()
      .then((res) => {
        console.log("search success", res);
        console.log(res.data);
        this.setData({
          searchPage: false,
          defaultPage: true,
          videoList: res.data,
        });
      })
      .catch((err) => {
        console.log("search fail", err);
      });
  },
  recommendSearch() {
    this.setData({
      searchPage: true,
      defaultPage: false,
    });
  },
  goDetail(e){
    console.log(e.currentTarget.dataset.info)
    // wx.navigateTo({
    //   url: '/pages/RSdetail/RSdetail',
    // })
  }
});
