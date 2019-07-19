// pages/summary.js
Page({
  data: {
    list: [],
    dataList: [{
      id: 0,
      name: '动词',
    }, {
      id: 1,
      name: '形容词',
    }]
  },
  onLoad: function () {
    this.setData({
      list: this.data.dataList
    });
  },
  toCategory: function(e) {
    const id = +e.target.id;
    this.setData({
      list: this.data.dataList[id].categoryList
    });
  }
})
