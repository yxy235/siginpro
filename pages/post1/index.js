// pages/post1/index.js
<<<<<<< HEAD
Page({

=======
<<<<<<< HEAD
Page({

=======
var app = getApp()
Page({
>>>>>>> e7e867a (ghx)
>>>>>>> c914987 (ghx)
  /**
   * 页面的初始数据
   */
  data: {
    UserID: '',
    UserName: '',
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    UserDepartment:'',
>>>>>>> e7e867a (ghx)
>>>>>>> c914987 (ghx)
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
<<<<<<< HEAD
    if(this.data.UserName.length == 0 || this.data.UserID.length == 0){
=======
<<<<<<< HEAD
    if(this.data.UserName.length == 0 || this.data.UserID.length == 0){
=======
    if(this.data.UserName.length == 0 || this.data.UserID.length == 0||this.data.UserDepartment.length == 0){
>>>>>>> e7e867a (ghx)
>>>>>>> c914987 (ghx)
      this.setData({
        infoMess:'温馨提示：用户名和密码不能为空！'
      })
    }else{
      this.setData({
        infoMess: ''
      })
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      getApp().globalData.UserName = this.data.UserName,
      getApp().globalData.UserID = this.data.UserID,
      getApp().globalData.UserDepartment = this.data.UserDepartment,
>>>>>>> e7e867a (ghx)
>>>>>>> c914987 (ghx)
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  bindDepartment: function (e) {
    let  department= e.detail.value;
    this.setData({
      UserDepartment: department
    })
   },
>>>>>>> e7e867a (ghx)
>>>>>>> c914987 (ghx)
  login: function(){
    wx.request({
      url: 'https://www.dfhelper.top:8080/login',
      method: 'POST',
      data:{
        UserID: app.globaldata.id,
        UserName: app.globaldata.name,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        UserDepartment: app.globaldata.department,
>>>>>>> e7e867a (ghx)
>>>>>>> c914987 (ghx)
      }
    })
  }
  
})