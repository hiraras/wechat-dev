//index.js
//获取应用实例
getApp()
const Datas = require('../../constants/data.js');
const Utils = require('../../utils/util.js');

Page({
  data: {
    currentWordIndex: 0,
    wordList: Datas.wordList,
    wordRangeMode: 0, // 0为清音，1为清+浊音，2为全部
    pingjiaShow: true,
    pianjiaShow: true,
    spellShow: true,
    wordPlaySequenceMode: 0, // 0为顺序，1为随机
    playSequenceList: [
      { text: '顺序', value: 0, id: 1 },
      { text: '随机', value: 1, id: 2 },
    ],
    wordRangeList: [
      { text: '清', value: 0, id: 1 },
      { text: '浊', value: 1, id: 2 },
      { text: '拗', value: 2, id: 3 },
    ],
    speed: 1, // 变化的时间间隔(秒)
    timer: 0,
  },
  onLoad: function () {
    const initOption = { detail: { value: 0 } };
    this.changeWordRangeMode(initOption);
  },
  onUnload: function () {
    this.stopTraining();
  },
  nextWord: function () {
    this.changeCurrentWordIndex();
  },
  changeCurrentWordIndex: function() {
    // direct为0则是上一个，否则为下一个
    const wordListLength = Datas.wordListLengthArr[this.data.wordRangeMode];
    const { currentWordIndex, wordPlaySequenceMode } = this.data;
    let result = 0;
    if (wordPlaySequenceMode === 0) {
      if (currentWordIndex === wordListLength - 1) {
        result = 0;
      } else {
        result = currentWordIndex + 1;
      }
    } else if (wordPlaySequenceMode === 1) {
      result = Utils.getRandom(0, wordListLength);
      while(currentWordIndex === result) {
        result = Utils.getRandom(0, wordListLength);
      }
    }
    this.setData({
      currentWordIndex: result
    });
  },
  changeWordRangeMode: function(e) {
    const mode = +e.detail.value;
    const end = Datas.wordListLengthArr[mode];
    this.stopTraining();
    this.setData({
      wordRangeMode: mode,
      wordList: Datas.wordList.slice(0, end),
      currentWordIndex: 0
    });
  },
  changePlaySequenceMode: function(e) {
    const newMode = +e.detail.value;
    this.stopTraining();
    this.setData({
      wordPlaySequenceMode: newMode,
      currentWordIndex: 0
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
  }
})
