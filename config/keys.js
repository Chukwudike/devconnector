if(process.env.NODE_ENV==="production"){
  module.exports = require('./keys.dev')
}else {
  module.exports = require('./keys.prod')
}

// module.exports = {
//   Mongourl: "mongodb://dike:dike99@ds139632.mlab.com:39632/dikconnector",
//   secretOrKey: 'secret'
// };
