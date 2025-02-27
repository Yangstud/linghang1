// pages/me/me.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    islogin: true,//与wxml显示相关
    islogout: false,//这个反而是登录状态
    userInfo: {},//记录用户信息
    //信仰足迹
    // grade1:true,
    //红色基因
    // grade2:true,
    //青春火种
    // grade3:true,
    grade1:false,
    grade2:false,
    grade3:false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let user = wx.getStorageSync("user"); //获取本地缓存，判断是否需要登录
    this.setData({
      userInfo: user
    })
    if (this.data.userInfo != null) {
      this.setData({
        islogin: false,
        islogout: true,
      })
      this.isExist();
      app.nickName=this.data.userInfo.nickName
      console.log('全局变量',app.nickName)
    }
    //信仰足迹徽章是否显示
    wx.cloud.callFunction({
      name:'VSAA',
      data:{
        index: 0,
        nickName: this.data.userInfo.nickName,
        achievement: 'VSachievement'
      }
    }).then(res2=>{
      console.log('VSAA请求成功',res2)
      // console.log('VSAA请求成功',res2.result.data[0].grade)
      if(res2.result.data[0].grade == true){
        this.setData({
          grade1:true
        })
      }
    }).catch(err2=>{
      console.log('VSAA请求失败',err2)
    })
    //红色基因徽章是否显示
    wx.cloud.callFunction({
      name:'VSAA',
      data:{
        index: 0,
        nickName: this.data.userInfo.nickName,
        achievement: 'MPachievement'
      }
    }).then(res2=>{
      console.log('VSAA请求成功',res2)
      // console.log('VSAA请求成功',res2.result.data[0].grade)
      if(res2.result.data[0].grade == true){
        this.setData({
          grade2:true
        })
      }
    }).catch(err2=>{
      console.log('VSAA请求失败',err2)
    })
    //青春火种徽章是否显示
    wx.cloud.callFunction({
      name:'VSAA',
      data:{
        index: 0,
        nickName: this.data.userInfo.nickName,
        achievement: 'FTachievement'
      }
    }).then(res2=>{
      console.log('VSAA请求成功',res2)
      // console.log('VSAA请求成功',res2.result.data[0].grade)
      if(res2.result.data[0].grade == true){
        this.setData({
          grade3:true
        })
      }
    }).catch(err2=>{
      console.log('VSAA请求失败',err2)
    })
  },
  login() {//登录功能
    console.log("授权登录执行");
    wx.getUserProfile({
      desc: "必须授权才能使用",
      success: (res) => {
        console.log("授权成功", res.userInfo);
        let user = res.userInfo;
        console.log('user', user)
        wx.setStorageSync("user", user) //设置本地缓存
        this.setData({
          userInfo: user
        });
        app.nickName=this.data.userInfo.nickName
        if (this.data.islogin == true) {
          this.setData({
            islogin: false,
            islogout: true,
          })
          this.isExist()
        }
      },
      fail: (res) => {
        console.log("授权失败", res);
      },
    });
  },

  logout() {//登出功能

    if (this.data.islogout == true) {
      this.setData({
        islogout: false,
        islogin: true,
      })
      this.upLoadCloud(1)
      this.setData({
        userInfo: {},
      });
      wx.setStorageSync("user", null); //清空本地缓存
    }

  },
  isExist() {//判断是否存在账户以及更新数据
    wx.cloud.database().collection('userInfo').where({
        nickName: this.data.userInfo.nickName
      }).get()
      .then((res) => {
        console.log("是否账户已存在", res);
        if (res.data.length == 0) {
          this.upLoadCloud(0)
        } else {
          this.upLoadCloud(1)
        }
      })
      .catch((err) => {
        console.log("isExist请求失败", err);
      });
  },
  upLoadCloud(Num) { //0代表未注册，1代表已注册，更新数据
    if (Num == 0) {
      wx.cloud
        .callFunction({
          name: "uploadUserInfo",
          data: {
            isExist: Num,
            nickName: this.data.userInfo.nickName ,
            isLogin: this.data.islogout,
            headPortrait: this.data.userInfo.avatarUrl
          }
        })
        .then((res) => {
          console.log("云函数请求成功", res);
        })
        .catch((err) => {
          console.log("云函数请求失败", err);
        });
    } else if (Num == 1) {
      wx.cloud
        .callFunction({
          name: "uploadUserInfo",
          data: {
            isExist: Num,
            isLogin:this.data.islogout,
            nickName: this.data.userInfo.nickName ,
          }
        })
        .then((res) => {
          console.log("云函数请求成功", res);
        })
        .catch((err) => {
          console.log("云函数请求失败", err);
        })
    }
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
    //信仰足迹徽章是否显示
    wx.cloud.callFunction({
      name:'VSAA',
      data:{
        index: 0,
        nickName: this.data.userInfo.nickName,
        achievement: 'VSachievement'
      }
    }).then(res2=>{
      console.log('VSAA请求成功',res2)
      // console.log('VSAA请求成功',res2.result.data[0].grade)
      if(res2.result.data[0].grade == true){
        this.setData({
          grade1:true
        })
      }
    }).catch(err2=>{
      console.log('VSAA请求失败',err2)
    })
    //红色基因徽章是否显示
    wx.cloud.callFunction({
      name:'VSAA',
      data:{
        index: 0,
        nickName: this.data.userInfo.nickName,
        achievement: 'MPachievement'
      }
    }).then(res2=>{
      console.log('VSAA请求成功',res2)
      // console.log('VSAA请求成功',res2.result.data[0].grade)
      if(res2.result.data[0].grade == true){
        this.setData({
          grade2:true
        })
      }
    }).catch(err2=>{
      console.log('VSAA请求失败',err2)
    })
    //青春火种徽章是否显示
    wx.cloud.callFunction({
      name:'VSAA',
      data:{
        index: 0,
        nickName: this.data.userInfo.nickName,
        achievement: 'FTachievement'
      }
    }).then(res2=>{
      console.log('VSAA请求成功',res2)
      // console.log('VSAA请求成功',res2.result.data[0].grade)
      if(res2.result.data[0].grade == true){
        this.setData({
          grade3:true
        })
      }
    }).catch(err2=>{
      console.log('VSAA请求失败',err2)
    })
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
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '领航'
        })
      }, 2000)
    })
    return {
      title: '领航',
      path: '/pages/me/me',
      promise 
    }

},
onShareTimeline(){
title:'领航'
imageUrl:'https://636c-cloud1-3gjki39y84ed3d7f-1309384772.tcb.qcloud.la/%E9%A2%86%E8%88%AA/%E5%BE%BD%E7%AB%A0/%E9%A2%86%E8%88%AA%40300x.png'
},


})