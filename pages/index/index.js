
var api = require('../../utils/api.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    swipers: [],
  },

  onLoad: function () {
    console.log('----what the fuck!!')
    console.log(api.SWIPERS)
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    that.getSwipers()
  },

// 获取轮播图信息
  getSwipers () {
    var that = this
    console.log('did this work?!!!!???')
    wx.request({
      url: "https://ios1.artand.cn/discover/home/rank",
      data: {},
      header:{
          "Content-Type":"json"
      },
      method: 'GET', 
      success: res=>{
        // success
        console.log('got data????')
        console.log(res.data.ads)
        that.setData({
          swipers: res.data.ads
        })
        console.log('log swipers')
        console.log(swipers)
        
      }
    })
   },

})
