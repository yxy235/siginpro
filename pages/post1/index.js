// pages/post1/index.js

var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    UserID: '',
    UserName: '',
    UserDepartment:'',
    infoMess: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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

  },
  gotoPage1: function (options) {   
    if(this.data.UserName.length == 0 || this.data.UserID.length == 0||this.data.UserDepartment.length == 0){

      this.setData({
        infoMess:'温馨提示：用户名和密码不能为空！'
      })
    }else{
      this.setData({
        infoMess: ''
      })
      getApp().globalData.UserName = this.data.UserName,
      getApp().globalData.UserID = this.data.UserID,
      getApp().globalData.UserDepartment = this.data.UserDepartment,
      wx.switchTab({      
          url: '/pages/index/index',    //要跳转到的页面路径
      })
    }
 },
 bindName: function(e){
   let name = e.detail.value;
   this.setData({
     UserName: name
   })
 },
 bindID: function (e) {
   let ID = e.detail.value;
   this.setData({
     UserID: ID
   })
  },
  bindDepartment: function (e) {
    let  department= e.detail.value;
    this.setData({
      UserDepartment: department
    })
   },
  login: function(){
    wx.request({
      url: 'https://www.dfhelper.top:8080/login',
      method: 'POST',
      data:{
        UserID: app.globaldata.id,
        UserName: app.globaldata.name,
        UserDepartment: app.globaldata.department,
      }
    })
  }
  
})