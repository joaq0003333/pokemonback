//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { dataBase } = require('./src/db.js');
const port = process.env.PORT || 3001
console.log("as")
// Syncing all the models at once.
dataBase.sync({ alter: true }).then(() => {
  server.listen(port, () => {
    console.log("listening on Port", port); // eslint-disable-line no-console
  });
});

// server.listen("3001", async ()=>{
//   await dataBase.sync({force: true}); //{force en true || false}
//   // await conn.sync({force: true}); force en true || false} => Eliminar todas las tablas y volverlas a crear, como esten definidas en el modelo
//   // await conn.sync({alter: true}); alter en true || false} => Modifica las tablas ya existentes en base a como esten definidas en el modelo
//   // await conn.sync(); 

//   console.log("Listening on port 3001")
// })