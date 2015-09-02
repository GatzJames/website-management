var paths = require('./paths.js');

module.exports = {
      entry: paths.src.js + '/main.js',
      output: {
        filename: "app.js",
        path: paths.dist.js
      },
     module: {
         loaders: [
           {
             test: /\.jsx?$/,
             exclude: /(node_modules|bower_components)/,
             loader: 'babel'
           }
         ]
     }
};
