// pages/memoryPassing/memoryPassing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    partyMemberList: [],
    searchName: '',
    userInfo: {},
    // grade:false
    grade: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let user = wx.getStorageSync("user")
    this.setData({
      userInfo: user
    })
    wx.cloud.callFunction({
      name: 'MPgetInfo'
    }).then(res => {
      console.log('MPgetInfo请求成功', res)
      this.setData({
        partyMemberList: res.result.data
      })
    }).catch(err => {
      console.log('MPgetInfo请求成功', err)
    })
    if (this.data.userInfo == null) {
      wx.showToast({
        title: '请先去个人中心登录',
        icon: 'none'
      })
    }
    //是否可以获得徽章
    wx.cloud.callFunction({
      name: 'VSAA',
      data: {
        index: 0,
        nickName: this.data.userInfo.nickName,
        achievement: 'MPachievement'
      }
    }).then(res2 => {
      console.log('VSAA请求成功', res2)
      if (res2.result.data[0].CaiXiYao == true) {
        if (res2.result.data[0].WangWeiLin == true) {
          this.setData({
            grade: true
          })
        }
      }
    }).catch(err2 => {
      console.log('VSAA请求失败', err2)
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
        //是否可以获得徽章
        wx.cloud.callFunction({
          name: 'VSAA',
          data: {
            index: 0,
            nickName: this.data.userInfo.nickName,
            achievement: 'MPachievement'
          }
        }).then(res2 => {
          console.log('VSAA请求成功', res2)
          if (res2.result.data[0].CaiXiYao == true) {
            if (res2.result.data[0].WangWeiLin == true) {
              this.setData({
                grade: true
              })
            }
          }
        }).catch(err2 => {
          console.log('VSAA请求失败', err2)
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
      path: '/pages/memoryPassing/memoryPassing',
      promise 
    }

},
onShareTimeline(){
title:'领航'
imageUrl:'https://636c-cloud1-3gjki39y84ed3d7f-1309384772.tcb.qcloud.la/%E9%A2%86%E8%88%AA/%E5%BE%BD%E7%AB%A0/%E9%A2%86%E8%88%AA%40300x.png'
},
  goDetail(e) {
    console.log(e.currentTarget.dataset.name.name)
    let name = e.currentTarget.dataset.name.name
    wx.navigateTo({
      url: '/pages/MPdetail/MPdetail?name=' + name,
    })

  },
  recommendSearch(e) {
    // console.log(e.detail.value)
    this.setData({
      searchName: e.detail.value
    })
  },
  search() {
    let db = wx.cloud.database();
    const _ = db.command;
    wx.cloud.database().collection('memoryPassing').where({
        name: db.RegExp({
          //要搜索的域名
          regexp: this.data.searchName, //要搜索的字段
          options: "i", //不区分大小写
        }),
      }).get()
      .then(res => {
        console.log('查询成功', res)
        this.setData({
          partyMemberList: res.data
        })
      }).catch(err => {
        console.log('查询失败', err)
      })

  },
  goReward2() {
    wx.navigateTo({
      url: '/pages/reWard2/reWard2',
    })
    wx.cloud.callFunction({
      name: 'VSAA',
      data: {
        index: 199,
        nickName: this.data.userInfo.nickName,
        achievement: 'MPachievement'
      }
    }).then(res3 => {
      console.log('全部完成VSAA上传成功', res3)
    }).catch(err3 => {
      console.log('全部完成VSAA上传失败', err3)
    })
  }

})