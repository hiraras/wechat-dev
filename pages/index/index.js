// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigatorList: [
      { pageName: 'homepage', title: '主页', id: 1 },
      { pageName: 'training', title: '训练', id: 2 },
      { pageName: 'draw', title: '画', id: 3 },
      { pageName: 'map', title: '地图', id: 4 },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.env.USER_DATA_PATH); // 获取本地用户文件目录地址
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
  onShareAppMessage: function () {

  }
})