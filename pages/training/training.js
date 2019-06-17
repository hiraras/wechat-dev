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
      playSequence: 0, // 0为顺序，1为随机，2为换段随机
      isRepeat: true,
    },
    tabList: [
      { tabName: '基本练习', value: 0 },
      { tabName: '换段练习', value: 1 },
    ],
    activeTab: 0,
    speed: 1, // 变化的时间间隔(秒)
    timer: 0,
    isEnd: false, // 不重复模式下是否结束
    noRepeatList: [],
  },
  onLoad: function () {
    this.setNewWordList(0);
  },
  onUnload: function () {
    this.stopTraining();
  },
  nextWord: function () {
    this.changeCurrentWordIndex(1);
  },
  changeCurrentWordIndex: function(direct) {
    // direct为0则是上一个，否则为下一个
    const wordListLength = this.data.wordList.length;
    const { modeData: { playSequence, isRepeat }, currentWordIndex, noRepeatList } = this.data;
    let result = 0;
    if (isRepeat) {
      result = Common.getNextWordIndex(currentWordIndex, playSequence, direct, wordListLength);
    } else if (!noRepeatList.length) {
      this.stopTraining();
      this.setData({
        isEnd: true
      });
      return ;
    } else {
      result = noRepeatList[0];
    }
    this.setData({
      currentWordIndex: result,
      noRepeatList: noRepeatList.slice(1)
    });
  },
  startTraining: function() {
    this.stopTraining();
    const timer = setInterval(() => {
      this.nextWord();
    }, this.data.speed * 1000);
    this.setData({ timer });
  },
  stopTraining: function() {
    clearInterval(this.data.timer);
  },
  sliderChange: function(e) {
    const speed = +e.detail.value;
    this.stopTraining();
    this.setData({ speed });
  },
  onTabsChange: function(e) {
    const value = e.detail.value;
    let newPlaySequence, isRepeat;
    if (value === 0) {
      newPlaySequence = 0;
      isRepeat = true;
    } else if (value === 1) {
      newPlaySequence = 2;
      isRepeat = false;
    }
    this.setData({
      activeTab: value,
      modeData: Object.assign(this.data.modeData, { 
        playSequence: newPlaySequence,
        isRepeat: isRepeat
      })
    });
    this.reset();
  },
  commonOptionsChange: function(e) {
    const newModeData = e.detail;
    const { isRepeat, wordRange } = newModeData;
    this.setData({
      modeData: newModeData,
      currentWordIndex: 0, // 只要有模式改变就重置
    });
    this.stopTraining();
    this.setNewWordList(wordRange);
    if (!isRepeat) {
      this.setNewNoRepeatList(wordRange);
    }
  },
  setNewWordList: function(mode) {
    const end = Datas.wordListLengthArr[mode];
    this.setData({
      wordList: Datas.wordList.slice(0, end),
    });
  },
  setNewNoRepeatList: function(mode) {
    const { modeData: { playSequence } } = this.data;
    const length = Datas.wordListLengthArr[mode];
    this.setData({
      noRepeatList: Common.getNoRepeatList(playSequence, length)
    });
  },
  reset: function() {
    this.stopTraining();
    const { modeData: { wordRange } } = this.data;
    this.setData({
      currentWordIndex: 0,
      isEnd: false, // 不重复模式下是否结束
    });
    this.setNewNoRepeatList(wordRange);
  }
})
