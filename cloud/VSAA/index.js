// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ //云环境初始化
  env: cloud.DYNAMIC_CURRENT_ENV //获取当前云环境id
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  if(event.index==1){
    cloud.database().collection('VSachievement').where({
      nickName:event.nickName
    }).update({
      data:{
        VSShangHai:true
      }
    })
  }
  else if(event.index==2){
    cloud.database().collection('VSachievement').where({
      nickName:event.nickName
    }).update({
      data:{
        VSNMGbaoTou:true
      }
    })
  }
  else if(event.index==3){
    cloud.database().collection('VSachievement').where({
      nickName:event.nickName
    }).update({
      data:{
        VSSXchangZhi:true
      }
    })
  }
  else if(event.index==4){
    cloud.database().collection('VSachievement').where({
      nickName:event.nickName
    }).update({
      data:{
        VSZJningBo:true
      }
    })
  }
  else if(event.index==5){
    cloud.database().collection('VSachievement').where({
      nickName:event.nickName
    }).update({
      data:{
        VSZJjiaXing:true
      }
    })
  }
  else if(event.index==6){
    cloud.database().collection('VSachievement').where({
      nickName:event.nickName
    }).update({
      data:{
        VSJSnanJing:true
      }
    })
  }
  else if(event.index==7){
    cloud.database().collection('VSachievement').where({
      nickName:event.nickName
    }).update({
      data:{
        VSJSchangZhou:true
      }
    })
  }
  else if(event.index==8){
    cloud.database().collection('VSachievement').where({
      nickName:event.nickName
    }).update({
      data:{
        VSHBwuHan:true
      }
    })
  }
  else if(event.index==9){
    cloud.database().collection('VSachievement').where({
      nickName:event.nickName
    }).update({
      data:{
        VSGDzhongShan:true
      }
    })
  }
  else if(event.index==10){
    cloud.database().collection('VSachievement').where({
      nickName:event.nickName
    }).update({
      data:{
        VSAHheFei:true
      }
    })
  }
  else if(event.index==99){
    cloud.database().collection('VSachievement').where({
      nickName:event.nickName
    }).update({
      data:{
        grade:true
      }
    })
  }
  else if (event.index==100){
    cloud.database().collection('MPachievement').where({
      nickName:event.nickName
    }).update({
      data:{
        WangWeiLin:true
      }
    })
  }
  else if (event.index==101){
    cloud.database().collection('MPachievement').where({
      nickName:event.nickName
    }).update({
      data:{
        CaiXiYao:true
      }
    })
  }
  else if (event.index==199){
    cloud.database().collection('MPachievement').where({
      nickName:event.nickName
    }).update({
      data:{
        grade:true
      }
    })
  }
  else if (event.index==200){
    cloud.database().collection('FTachievement').where({
      nickName:event.nickName
    }).update({
      data:{
        mark:true
      }
    })
  }
  else if (event.index==299){
    cloud.database().collection('FTachievement').where({
      nickName:event.nickName
    }).update({
      data:{
        mark:true,
        grade:true
      }
    })
  }
  
  else {}
  return await cloud.database().collection(event.achievement).where({nickName:event.nickName}).get()
}