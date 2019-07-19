const Data = require('../../constants/data');

Page({
  data: {
    mode: 0, // 动词种类列表页面和详细介绍在同一页面，故由此变量控制显示哪个，0为列表页面，1为详细页面
    detailIndex: 0,
    pageId: 0,
    list: [],
    contentList: [],
  },
  onLoad: function (options) {
    const { id, detail = 0 } = options;
    this.setData({
      mode: detail ? 1 : 0,
      detailIndex: +detail,
      pageId: +id,
      list: Data.summaryData[+id].categoryList,
      contentList: detail ? Data.summaryData[+id].categoryList[+detail].content.split('\n') : []
    });
  },
})
