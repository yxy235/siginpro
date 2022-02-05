App({
  globalData:{
    UserName :'',
    UserDepartment :'',
    UserID :''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.login({
      success(res){
        if(res.code){
          wx.request({
            url: 'https://www.dfhelper.top:8080/logined', /* 判断是否登录过 */
            method:'GET',
            data:res.code,
            success(res){
              /* 是否登录过标志位判断 */
              if(res.data.logined){
                /* do something */
                getApp().globalData.UserName = res.data.UserName,
                getApp().globalData.UserID = res.data.UserID,
                getApp().globalData.UserDepartment = res.data.UserDepartment,
                wx.switchTab({
                  url: '/pages/index/index',
                })
              }
            }
          })
        }
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
