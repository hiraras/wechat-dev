// components/color-picker/color-picker.js
const Common = require('../../common/common');
const Data = require('../../constants/data');

Component({
  properties: {

  },
  lifetimes: {
    attached: function() {
    }
  },
  attached: function() {
  },
  data: {
    colorList: Data.colorList,
    show: false,
    color: 'red'
  },
  methods: {
    show: function() {
      this.setData({ show: true });
    },
    onSelect: function(e) {
      const { currentTarget: { dataset: { color } } } = e;
      this.setData({ show: false, color });
      this.triggerEvent("onChange", { color });
    }
  }
})
