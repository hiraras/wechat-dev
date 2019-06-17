
const Data = require('../../constants/data');
Component({
  properties: {
    word: {
      type: Object,
      value: Data.wordList[0]
    }
  },
  data: {
    pingjiaShow: true,
    pianjiaShow: true,
    spellShow: true,
  },
  methods: {
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
      const { word } = this.properties;
      // 路径不能用 ../../assets/audios... 好像是相对于根目录
      const filePath = `/assets/audios/${word.spell}.mp3`;
      const innerAudioContext = wx.createInnerAudioContext();
      innerAudioContext.autoplay = true;
      innerAudioContext.src = filePath; // 'http://o-oo.net.cn/50yintuceshi/a.mp3'
      innerAudioContext.onPlay(() => {
        console.log('开始播放');
      });
      innerAudioContext.onError((res) => {
        console.log(res.errMsg);
      });
      innerAudioContext.onStop(() => {
        console.log('播放结束');
      });
    }
  }
})
