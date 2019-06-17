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
    },
    tabList: [
      { tabName: '基本练习', value: 0 },
      { tabName: '换段练习', value: 1 },
    ],
    activeTab: 0,
    speed: 1, // 变化的时间间隔(秒)
    timer: 0,
  },
  onLoad: function () {
    this.setNewWordList(0);
  },
  onUnload: function () {
    this.stopTraining();
  },
  nextWord: function () {
    this.changeCurrentWordIndex();
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
  startTraining: function() {
    this.stopTraining();
    const timer = setInterval(() => {
      this.changeCurrentWordIndex();
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
    this.setData({
      activeTab: e.detail.value
    });
  },
  commonOptionsChange: function(e) {
    const newModeData = e.detail;
    this.setData({
      modeData: newModeData,
      currentWordIndex: 0, // 只要有模式改变就重置
    });
    this.stopTraining();
    this.setNewWordList(newModeData.wordRange);
  },
  setNewWordList: function(mode) {
    const end = Datas.wordListLengthArr[mode];
    this.setData({
      wordList: Datas.wordList.slice(0, end),
    });
  },
})
