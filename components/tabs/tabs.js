
Component({
  properties: {
    tabList: {
      type: Array,
      value: [
        { tabName: 'tab1', value: 0 },
        { tabName: 'tab2', value: 1 }
      ]
    },
    activeIndex: {
      type: Number,
      value: 0,
      observer: function() {
        this.setData({
          tabPosition: this.data.tabWidth * this.getActiveTabIndex()
        });
      }
    }
  },
  lifetimes: {
    // 新版本
    attached: function() {
      this.init();
    }
  },
  attached: function() {
    // <2.2.3版本调用
    this.init();
  },
  data: {
    tabWidth: 100,
    tabPosition: 0
  },
  methods: {
    init: function() {
      this.setData({
        tabWidth: 100 / this.properties.tabList.length
      });
    },
    onTabClick: function(e) {
      const id = +e.currentTarget.id;
      this.triggerEvent("onChange", { value: id });
    },
    getActiveTabIndex: function() {
      const { activeIndex, tabList } = this.properties;
      for (let i = 0; i < tabList.length; i += 1) {
        if (tabList[i].value === activeIndex) {
          return i;
        }
      }
    }
  }
})
