interface RequestOptions extends WechatMiniprogram.RequestOption {
  loading?: boolean;
}

export const request = async <T = any>(options: RequestOptions): Promise<T> => {
  if (options.loading) {
    wx.showLoading({ title: '加载中...' })
  }

  try {
    const res = await wx.request({
      ...options,
      url: `${BASE_URL}${options.url}`,
      header: {
        ...options.header,
        'Authorization': `Bearer ${wx.getStorageSync('token')}`
      }
    })

    if (res.statusCode >= 200 && res.statusCode < 300) {
      return res.data as T
    }
    throw new Error(res.data.message || '请求失败')
  } finally {
    if (options.loading) {
      wx.hideLoading()
    }
  }
}