// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ //云环境初始化
  env: cloud.DYNAMIC_CURRENT_ENV //获取当前云环境id
})

// 云函数入口函数,与"pages/me/me"绑定
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  if(event.isExist==0){
  cloud.database().collection('userInfo').add({
    data:{
        nickName: event.nickName,
        isLogin: event.isLogin,
        headPortrait: event.headPortrait,
    }
  })
  cloud.database().collection('VSShangHai').add({
    data:{
      nickName: event.nickName,
      progress:0,
      first:false,
      second:false,
      third:false,
      fourth:false,
      fifth:false,
      sixth:false,
      // seventh:false,
      // eighth:false
    }
  })

  cloud.database().collection('VSNMGbaoTou').add({
    data:{
      nickName: event.nickName,
      progress:0,
      first:false,
      second:false,
      third:false,
      // fourth:false,
      // fifth:false,
      // sixth:false,
      // seventh:false,
      // eighth:false
    }
  })
  cloud.database().collection('VSSXchangZhi').add({
    data:{
      nickName: event.nickName,
      progress:0,
      first:false,
      second:false,
      // third:false,
      // fourth:false,
      // fifth:false,
      // sixth:false,
      // seventh:false,
      // eighth:false
    }
  })
  cloud.database().collection('VSZJningBo').add({
    data:{
      nickName: event.nickName,
      progress:0,
      first:false,
      second:false,
      third:false,
      fourth:false,
      // fifth:false,
      // sixth:false,
      // seventh:false,
      // eighth:false
    }
  })
  cloud.database().collection('VSZJjiaXing').add({
    data:{
      nickName: event.nickName,
      progress:0,
      first:false,
      second:false,
      // third:false,
      // fourth:false,
      // fifth:false,
      // sixth:false,
      // seventh:false,
      // eighth:false
    }
  })
  cloud.database().collection('VSJSnanJing').add({
    data:{
      nickName: event.nickName,
      progress:0,
      first:false,
      second:false,
      third:false,
      fourth:false,
      fifth:false,
      sixth:false,
      seventh:false,
      eighth:false
    }
  })
  cloud.database().collection('VSJSchangZhou').add({
    data:{
      nickName: event.nickName,
      progress:0,
      first:false,
      second:false,
      third:false,
      // fourth:false,
      // fifth:false,
      // sixth:false,
      // seventh:false,
      // eighth:false
    }
  })
  cloud.database().collection('VSHBwuHan').add({
    data:{
      nickName: event.nickName,
      progress:0,
      first:false,
      second:false,
      third:false,
      fourth:false,
      // fifth:false,
      // sixth:false,
      // seventh:false,
      // eighth:false
    }
  })
  cloud.database().collection('VSGDzhongShan').add({
    data:{
      nickName: event.nickName,
      progress:0,
      first:false,
      second:false,
      third:false,
      // fourth:false,
      // fifth:false,
      // sixth:false,
      // seventh:false,
      // eighth:false
    }
  })
  cloud.database().collection('VSAHheFei').add({
    data:{
      nickName: event.nickName,
      progress:0,
      first:false,
      second:false,
      // third:false,
      // fourth:false,
      // fifth:false,
      // sixth:false,
      // seventh:false,
      // eighth:false
    }
  })
    
    cloud.database().collection('VSachievement').add({
      data:{
        nickName: event.nickName,
        VSAHheFei:false,
        VSGDzhongShan:false,
        VSHBwuHan:false,
        VSJSchangZhou:false,
        VSJSnanJing:false,
        VSZJjiaXing:false,
        VSZJningBo:false,
        VSSXchangZhi:false,
        VSNMGbaoTou:false,
        VSShangHai:false,
        grade:false
      }
    })
    cloud.database().collection('MPachievement').add({
      data:{
        nickName: event.nickName,
        WangWeiLin:false,
        CaiXiYao:false,
        grade:false
      }
    })
    cloud.database().collection('FTachievement').add({
      data:{
        nickName: event.nickName,
        mark:false,
        grade:false,
      }
    })
  }else if(event.isExist==1){
    cloud.database().collection('userInfo').where({nickName: event.nickName}).update({
      data:{
          isLogin: event.isLogin,
      }
    })
  }
  return event

}