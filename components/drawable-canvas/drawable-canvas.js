// components/drawable-canvas/drawable-canvas.js
Component({
  properties: {
    style: {
      type: Object,
      value: { width: '100%', height: '300px' }
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
  },
  lifetimes: {
    attached: function() {
      const ctx = wx.createCanvasContext('myCanvas', this);
      this.setData({ ctx });
    }
  },
  attached: function() {
    const ctx = wx.createCanvasContext('myCanvas', this);
    this.setData({ ctx });
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
      const { ctx, mode } = this.data;
      if (mode === 0) {
        ctx.closePath();
      }
    },
    clearCanvas: function() {
      const { ctx, mode } = this.data;
      ctx.clearRect(0, 0, 10000, 10000);
      ctx.draw();
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
  }
})
