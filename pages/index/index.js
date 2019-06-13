//index.js
//获取应用实例
const app = getApp()
const Datas = require('../../constants/data.js');

Page({
  data: {
    currentWordIndex: 0,
    wordList: Datas.wordList,
    model: 0,// 0为轻音，1为轻+浊音，2为全部
    pingjiaShow: true,
    pianjiaShow: true,
    spellShow: true,
  },
  onLoad: function () {
    this.changeModel(0);
  },
  prevWord: function() {
    const wordListLength = Datas.wordListLengthArr[this.data.model];
    const { currentWordIndex } = this.data;
    let result = 0;
    if (currentWordIndex === 0) {
      result = wordListLength - 1;
    } else {
      result = currentWordIndex - 1;
    }
    this.setData({
      currentWordIndex: result
    });
  },
  nextWord: function () {
    const wordListLength = Datas.wordListLengthArr[this.data.model];
    const { currentWordIndex } = this.data;
    let result = 0;
    if (currentWordIndex === wordListLength - 1) {
      result = 0;
    } else {
      result = currentWordIndex + 1;
    }
    this.setData({
      currentWordIndex: result
    });
  },
  changeModel: function(model) {
    const end = Datas.wordListLengthArr[model];
    this.setData({
      model,
      wordList: Datas.wordList.slice(0, end)
    });
  },
  pingjiaChange: function(e) {
    this.setData({ pingjiaShow: e.detail.value });
  },
  pianjiaChange: function(e) {
    this.setData({ pianjiaShow: e.detail.value });
  },
  spellChange: function(e) {
    this.setData({ spellShow: e.detail.value });
  },
  playAudio: function() {
    const { wordList, currentWordIndex } = this.data;
    const filePath = `../../assets/audios/${wordList[currentWordIndex].spell}.mp3`;
    const innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.src = filePath;
    innerAudioContext.onPlay(() => {
      console.log('开始播放');
    });
    innerAudioContext.onError((res) => {
      console.log(res.errMsg);
    });
  }
})
