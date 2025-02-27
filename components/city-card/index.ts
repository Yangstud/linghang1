Component({
  properties: {
    cityInfo: {
      type: Object,
      value: {}
    }
  },

  data: {
    loading: false
  },

  methods: {
    async onTap() {
      try {
        this.setData({ loading: true })
        await wx.navigateTo({
          url: `/pages/${this.data.cityInfo.path}/index`
        })
      } catch (error) {
        wx.showToast({
          title: '跳转失败',
          icon: 'none'
        })
      } finally {
        this.setData({ loading: false })
      }
    }
  }
})