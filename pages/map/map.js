
const Common = require('../../common/common');

Page({
  data: {
    location: {
      latitude: 39,
      longitude: 116
    },
    timer: 0,
    markets: [{
      iconPath: "/assets/images/icons/banglocation.png",
      id: 0,
      latitude: 39,
      longitude: 116,
      width: 24,
      height: 24
    }]
  },
  onLoad: function (options) {
    this.getLocation();
  },
  onUnload: function() {
  },
  getLocation: function() {
    wx.getLocation({
      success: (res) => {
        const location = {
          latitude: res.latitude,
          longitude: res.longitude
        };
        this.updateLocation(location);
      }
    });
  },
  updateLocation: function(location) {
    this.setData({
      location,
      markets: [Object.assign(this.data.markets, location)]
    });
  }
})
