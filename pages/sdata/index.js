// pages/sdata/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'能不能在上面填一下姓名咧',
    section:'能不能在上面填一下部门咧',
    id:'',
    key:'',
    infoMess:'',
    /* 显示用 */
    Departments:['部门一','部门二','部门三']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  userNameInput:function(e){
    this.setData({
      username:e.detail.value
    })
  },

  sectionInput:function(e){
    this.setData({
      section:e.detail.value
    })
  },

  idInput:function(e){
    this.setData({
      id:e.detail.value
    })
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 
  onLoad: function (options) {
    this.setData({username:getApp().globalData.UserName})
    this.setData({section:getApp().globalData.UserDepartment})
    this.setData({id:getApp().globalData.UserID})
   
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  getLotteryResult:function(){
    let time = new Date().getTime();
    var settedTime;
    settedTime = new Date('2022-01-03 21:21:00').getTime();
    if (time >= settedTime){
      wx.navigateTo({
        url: '/pages/lottery/lottery'
     })
    }
    else {
      this.setData({
        infoMess : '到时间才可以查看中奖信息哦'
      })
    }
      },
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

    this.setData({
      infoMess : ''
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})