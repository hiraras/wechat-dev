// components/common-options/common-options.js
Component({
  properties: {
    modeData: {
      type: Object,
      value: {
        playSequence: 0,
        wordRange: 0
      }
    }
  },
  data: {
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
  methods: {
    changePlaySequenceMode: function(e) {
      const mode = +e.detail.value;
      const newState = Object.assign({}, this.properties.modeData, {
        playSequence: mode
      });
      this.triggerEvent('onChange', newState);
    },
    changeWordRangeMode: function(e) {
      const mode = +e.detail.value;
      const newState = Object.assign({}, this.properties.modeData, {
        wordRange: mode
      });
      this.triggerEvent('onChange', newState);
    }
  }
})
