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
      isRepeat: true,
    },
    isEnd: false, // 不重复模式下是否结束
    wordSequenceList: [], // 字符列表的顺序
  },
  onLoad: function (options) {
    // console.log(options);
    this.init();
  },
  prevWord: function() {
    this.changeCurrentWordIndex(0);
  },
  nextWord: function () {
    this.changeCurrentWordIndex(1);
  },
  changeCurrentWordIndex: function(direct) {
    // direct为0则是上一个，否则为下一个，不重复模式下上一个与下一个效果相同
    const { modeData: { playSequence, isRepeat }, currentWordIndex, wordSequenceList } = this.data;
    let result = 0;
    let newWordSequenceList = [];
    if (isRepeat) {
      newWordSequenceList = wordSequenceList;
      result = Common.getNextWordIndex(currentWordIndex, playSequence, direct, newWordSequenceList);
    } else {
      newWordSequenceList = wordSequenceList.slice(1);
      result = newWordSequenceList.length && newWordSequenceList[0];
    }
    if (newWordSequenceList.length) {
      this.setData({
        currentWordIndex: result,
        wordSequenceList: newWordSequenceList
      });
    } else {
      this.setData({ isEnd: true });
    }
  },
  commonOptionsChange: function(e) {
    const newModeData = e.detail;
    this.setData({
      modeData: newModeData,
    });
    this.init();
  },
  setNewWordList: function(len) {
    this.setData({
      wordList: Datas.wordList.slice(0, len),
    });
  },
  setNewWordSequenceList: function(playSequence, len) {
    this.setData({
      wordSequenceList: Common.getWordSequenceList(playSequence, len)
    });
  },
  restart: function() {
    this.init();
  },
  init: function() {
    const { wordRange, playSequence } = this.data.modeData;
    const len = Datas.wordListLengthArr[wordRange];
    this.reset();
    this.setNewWordList(len);
    this.setNewWordSequenceList(playSequence, len);
  },
  reset: function() {
    this.setData({
      currentWordIndex: 0,
      wordList: Datas.wordList,
      isEnd: false,
      wordSequenceList: [],
    });
  }
})
