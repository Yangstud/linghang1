// 云函数入口文件
// const getOpenId = require('./getOpenId/index');
const selectRecord = require('./selectRecord/index');

// 云函数入口函数
exports.main = async (event, context) => {

  switch (event.type) {
    // case 'getOpenId':
    //   return await getOpenId.main(event, context);
    case 'selectRecord':
      return await selectRecord.main(event, context);
  }
  
}