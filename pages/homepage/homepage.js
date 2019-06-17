//index.js
//获取应用实例
const Datas = require('../../constants/data.js');
const Utils = require('../../utils/util.js');
const Common = require('../../common/common');

Page({
  data: {
    currentWordIndex: 0,
    wordList: Datas.wordList,
    modeData: {
      wordRange: 0, // 0为清音，1为清+浊音，2为全部
      playSequence: 0, // 0为顺序，1为随机
    }
  },
  onLoad: function (options) {
    // console.log(options);
    this.setNewWordList(0);
  },
  prevWord: function() {
    this.changeCurrentWordIndex(0);
  },
  nextWord: function () {
    this.changeCurrentWordIndex(1);
  },
  changeCurrentWordIndex: function(direct) {
    // direct为0则是上一个，否则为下一个
    const wordListLength = Datas.wordListLengthArr[this.data.modeData.wordRange];
    const { modeData: { playSequence }, currentWordIndex } = this.data;
    const result = Common.getNextWordIndex(currentWordIndex, playSequence, direct, wordListLength);
    this.setData({
      currentWordIndex: result
    });
  },
  commonOptionsChange: function(e) {
    const newModeData = e.detail;
    this.setData({
      modeData: newModeData,
      currentWordIndex: 0, // 只要有模式改变就重置
    });
    this.setNewWordList(newModeData.wordRange);
  },
  setNewWordList: function(mode) {
    const end = Datas.wordListLengthArr[mode];
    this.setData({
      wordList: Datas.wordList.slice(0, end),
    });
  },
})
