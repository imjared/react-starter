var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  plugins: [
    require('precss')({ /* ...options */ }),
    require('autoprefixer')({ /* ...options */ })
  ]
};
