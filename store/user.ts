import { observable, action } from 'mobx-miniprogram'

export const userStore = observable({
  // 状态
  userInfo: null,
  isLogin: false,
  achievements: [],

  // 计算属性
  get hasCompletedAll() {
    return this.achievements.length === 10
  },

  // actions
  setUserInfo: action(function(userInfo) {
    this.userInfo = userInfo
    this.isLogin = !!userInfo
  }),

  updateAchievement: action(function(achievement) {
    this.achievements.push(achievement)
  })
})