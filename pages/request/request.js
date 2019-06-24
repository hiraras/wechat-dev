Page({
  data: {
    data: ''
  },
  onLoad: function (options) {

  },
  requestTest: function() {
    wx.request({
      url: 'https://i.baidu.com/Top/getTopList',
      method: 'get',
      success: (res) => {
        this.setData({
          data: JSON.stringify(res.data)
        });
      }
    });
  },
  clear: function() {
    this.setData({ data: '' });
  }
})
