if (process.env.NODE_ENV === 'prod') {
  module.exports = require('./configureStore_prod');
} else {
  module.exports = require('./configureStore_dev');
}