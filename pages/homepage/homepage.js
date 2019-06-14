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
  },
  onLoad: function (options) {
    // console.log(options);
    const initOption = { detail: { value: 0 } };
    this.changeWordRangeMode(initOption);
  },
  prevWord: function() {
    this.changeCurrentWordIndex(0);
  },
  nextWord: function () {
    this.changeCurrentWordIndex(1);
  },
  changeCurrentWordIndex: function(direct) {
    // direct为0则是上一个，否则为下一个
    const wordListLength = Datas.wordListLengthArr[this.data.wordRangeMode];
    const { currentWordIndex, wordPlaySequenceMode } = this.data;
    let result = 0;
    if (wordPlaySequenceMode === 0) {
      if (direct === 0 && currentWordIndex === 0) {
        result = wordListLength - 1;
      } else if (direct === 1 && currentWordIndex === wordListLength - 1) {
        result = 0;
      } else {
        const nextStep = direct === 0 ? -1 : 1;
        result = currentWordIndex + nextStep;
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
    this.setData({
      wordRangeMode: mode,
      wordList: Datas.wordList.slice(0, end),
      currentWordIndex: 0
    });
  },
  changePlaySequenceMode: function(e) {
    const newMode = +e.detail.value;
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
  playAudio: function() {
    const { wordList, currentWordIndex } = this.data;
    // 路径不能用 ../../assets/audios... 好像是相对于根目录
    const filePath = `/assets/audios/${wordList[currentWordIndex].spell}.mp3`;
    const innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.autoplay = true;
    innerAudioContext.src = filePath; // 'http://o-oo.net.cn/50yintuceshi/a.mp3'
    innerAudioContext.onPlay(() => {
      console.log('开始播放');
    });
    innerAudioContext.onError((res) => {
      console.log(res.errMsg);
    });
  }
})
