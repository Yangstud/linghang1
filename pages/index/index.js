// index.js
//import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog'
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total: 50000,
    userInfo:{},
    grade:false
    // grade:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let user = wx.getStorageSync("user")
    this.setData({
      userInfo:user
    })
    console.log('用户登录状态',this.data.userInfo)
    this.getPageView()
    console.log('全局变量虚拟站点', app.nickName)
    if(this.data.userInfo == null){
      wx.showToast({
        title: '请先去个人中心登录',
        icon:'none'
      })
    }
    wx.cloud.callFunction({
      name: 'VSAA',
      data: {
        index: 0,
        nickName: this.data.userInfo.nickName,
        achievement: 'VSachievement'
      }
    }).then(res2 => {
      console.log('VSAA请求成功', res2)
      // console.log(res2.result.data[0].VSAHheFei)
      if(res2.result.data[0].VSAHheFei == true){
        if(res2.result.data[0].VSGDzhongShan == true){
          if(res2.result.data[0].VSHBwuHan == true){
            if(res2.result.data[0].VSJSchangZhou == true){
              if(res2.result.data[0].VSJSnanJing == true){
                if(res2.result.data[0].VSNMGbaoTou == true){
                  if(res2.result.data[0].VSSXchangZhi == true){
                    if(res2.result.data[0].VSShangHai == true){
                      if(res2.result.data[0].VSZJjiaXing == true){
                        if(res2.result.data[0].VSZJningBo == true){
                          this.setData({
                            grade:true
                          })
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

    }).catch(err2 => {
      console.log('VSAA请求失败', err2)
    })
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
        path: '/pages/index/index',
        promise 
      }

  },
onShareTimeline(){
  title:'领航'
  imageUrl:'https://636c-cloud1-3gjki39y84ed3d7f-1309384772.tcb.qcloud.la/%E9%A2%86%E8%88%AA/%E5%BE%BD%E7%AB%A0/%E9%A2%86%E8%88%AA%40300x.png'
},
  getPageView() { //获取浏览量
    wx.cloud.database().collection('pageView').doc('b69f67c062ecd7e6106a2c7e062d201f').get()
      .then((res) => {
        console.log("pageView请求成功", res);
        let total = res.data.total + 1
        this.setData({
          total: total
        })
        this.updatePageView(total)
      })
      .catch((err) => {
        console.log("pageView请求失败", err);
      });
  },

  updatePageView(total) { //更新浏览量
    wx.cloud.callFunction({
        name: "updatePageView",
        data: {
          total: total
        }
      })
      .then((res) => {
        console.log("updatePageView请求成功", res);
      })
      .catch((err) => {
        console.log("updatePageView请求失败", err);
      });
  },

  goShangHai: function () {
    wx.showModal({
      title: '提示',
      content: '是否前往上海',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
            url: '/pages/ShangHai/ShangHai?name=ShangHai',
            success: (result) => {
              console.log('跳转成功')
            },
            fail: (ett) => {
              console.log(ett)
            }
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  goAnHui: function () {
    wx.showModal({
      title: '提示',
      content: '是否前往安徽合肥',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
            url: '/pages/AHheFei/AHheFei',
            success: (result) => {
              console.log('跳转成功')
            },
            fail: (ett) => {
              console.log(ett)
            }
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  goNMG: function () {
    wx.showModal({
      title: '提示',
      content: '是否前往内蒙古包头',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
            url: '/pages/NMGbaoTou/NMGbaoTou',
            success: (result) => {
              console.log('跳转成功')
            },
            fail: (ett) => {
              console.log(ett)
            }
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  goShanXi: function () {
    wx.showModal({
      title: '提示',
      content: '是否前往山西长治',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
            url: '/pages/SXchangZhi/SXchangZhi',
            success: (result) => {
              console.log('跳转成功')
            },
            fail: (ett) => {
              console.log(ett)
            }
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  goGuangDong: function () {
    wx.showModal({
      title: '提示',
      content: '是否前往广东中山',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
            url: '/pages/GDzhongShan/GDzhongShan',
            success: (result) => {
              console.log('跳转成功')
            },
            fail: (ett) => {
              console.log(ett)
            }
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  goHuBei: function () {
    wx.showModal({
      title: '提示',
      content: '是否前往湖北武汉',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
            url: '/pages/HBwuHan/HBwuHan',
            success: (result) => {
              console.log('跳转成功')
            },
            fail: (ett) => {
              console.log(ett)
            }
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  goJiangSu: function () {
    wx.showActionSheet({
      itemList: ['江苏南京', '江苏常州'],
      success: res => {
        console.log(res)
        // console.log('content',res.tapIndex)
        if (res.tapIndex == 0) {
          wx.navigateTo({
            url: '/pages/JSnanJing/JSnanJing',
            success: (result) => {
              console.log('跳转成功')
            },
            fail: (ett) => {
              console.log(ett)
            }
          });
        }else if (res.tapIndex == 1){
          wx.navigateTo({
            url: '/pages/JSchangZhou/JSchangZhou',
            success: (result) => {
              console.log('跳转成功')
            },
            fail: (ett) => {
              console.log(ett)
            }
          });
        }
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  goZheJiang: function () {
    wx.showActionSheet({
      itemList: ['浙江嘉兴', '浙江宁波'],
      success: res => {
        console.log(res)
        // console.log('content',res.tapIndex)
        if (res.tapIndex == 0) {
          wx.navigateTo({
            url: '/pages/ZJjiaXing/ZJjiaXing',
            success: (result) => {
              console.log('跳转成功')
            },
            fail: (ett) => {
              console.log(ett)
            }
          });
        }else if (res.tapIndex == 1){
          wx.navigateTo({
            url: '/pages/ZJningBo/ZJningBo',
            success: (result) => {
              console.log('跳转成功')
            },
            fail: (ett) => {
              console.log(ett)
            }
          });
        }
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  goReward3(){
    wx.navigateTo({
      url: '/pages/reWard3/reWard3',
    })
    wx.cloud.callFunction({
      name: 'VSAA',
      data: {
        index: 99,
        nickName: this.data.userInfo.nickName,
        achievement: 'VSachievement'
      }
    }).then(res3 => {
      console.log('全部完成VSAA上传成功', res3)
    }).catch(err3 => {
      console.log('全部完成VSAA上传失败', err3)
    })
  }
})