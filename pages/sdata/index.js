// pages/sdata/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'能不能在上面填一下姓名咧',
    section:'能不能在上面填一下部门咧',
    id:'',
<<<<<<< HEAD
    key:''
=======
<<<<<<< HEAD
    key:''
=======
    key:'',
    infoMess:''
>>>>>>> e7e867a (ghx)
>>>>>>> c914987 (ghx)
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c914987 (ghx)
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
<<<<<<< HEAD
=======
=======
 
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
>>>>>>> e7e867a (ghx)
>>>>>>> c914987 (ghx)
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
    this.setData({
      infoMess : ''
    })
>>>>>>> e7e867a (ghx)
>>>>>>> c914987 (ghx)
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