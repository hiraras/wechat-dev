// components/drawable-canvas/drawable-canvas.js
const Common = require('../../common/common');

Component({
  properties: {
    style: {
      type: Object,
      value: { width: '100%', minHeight: '400px' }
    },
    lineWidth: {
      type: Number,
      value: 2
    }
  },
  data: {
    ctx: null,
    lineColor: 'red',
    modeList: ['画笔', '橡皮擦'],
    mode: 0,
    eraserSize: 10, // 橡皮擦大小,半径
    autoClear: false,
    speed: 1,
    timer: 0,
  },
  lifetimes: {
    attached: function() {
      const ctx = wx.createCanvasContext('myCanvas', this);
      this.setData({ ctx });
    },
    detached: function() {
      clearTimeout(this.data.timer);
    }
  },
  attached: function() {
    const ctx = wx.createCanvasContext('myCanvas', this);
    this.setData({ ctx });
  },
  detached: function() {
    clearTimeout(this.data.timer);
  },
  methods: {
    touchStart: function(e) {
      const { ctx, mode } = this.data;
      const { x, y } = e.touches[0];
      if (mode === 0) {
        ctx.beginPath();
        ctx.setStrokeStyle(this.data.lineColor);
        ctx.setLineWidth(this.properties.lineWidth);
        ctx.moveTo(x, y);
        clearTimeout(this.data.timer);
      }
    },
    touchMove: function(e) {
      const { ctx, mode, eraserSize } = this.data;
      const { x, y } = e.touches[0];
      if (mode === 0) {
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.draw(true);
        ctx.moveTo(x, y);
      } else if (mode === 1) {
        ctx.clearRect(x - eraserSize, y - eraserSize, eraserSize * 2, eraserSize * 2);
        ctx.draw(true);
      }
    },
    touchEnd: function() {
      const { ctx, mode, speed, autoClear } = this.data;
      if (mode === 0) {
        ctx.closePath();
        if (autoClear) {
          const timer = setTimeout(() => {
            this.clearCanvas();
          }, speed * 1000);
          this.setData({ timer });
        }
      }
    },
    clearCanvas: function() {
      const { ctx } = this.data;
      ctx.clearRect(0, 0, 10000, 10000);
      ctx.draw(true);
    },
    onColorChange: function(data) {
      const { detail: { color } } = data;
      this.setData({
        lineColor: color
      });
    },
    modeChange: function() {
      const { mode, modeList } = this.data;
      const newMode = mode === modeList.length - 1 ? 0 : mode + 1;
      this.setData({
        mode: newMode,
      });
    },
    switchChange: function(e) {
      const { value } = e.detail;
      clearTimeout(this.data.timer);
      this.setData({ autoClear: value });
    },
    sliderChange: function(e) {
      const speed = +e.detail.value;
      clearTimeout(this.data.timer);
      this.setData({ speed });
    },
    createImage: function() {
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 500,
        height: 500,
        canvasId: 'myCanvas',
        success: function(res) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success() {
              wx.showModal({
                title: 'success'
              });
            },
            fail: function(e) {
              Common.showErrorMsg(e);
            }
          });
        },
        fail: function(e) {
          Common.showErrorMsg(e);
        }
      }, this);
    }
  }
})
