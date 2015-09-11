// Configuration for gulp tasks
var _src = './src',
    _dist = './dist';

module.exports = {
// Projects Paths
    paths:{
        'src' : {
            'base': _src,
            'js' : _src + '/js',
            'jsmain' : _src + '/js/main.js',
            'scss' : _src + '/sass/**/*.{sass,scss}',
            'scssmain' : _src + '/sass/main.scss',
            'img' : _src + '/img/*.{jpg,png,ico}',
            'html' : _src + '/index.html'

        },
        'dist' : {
            'base': _dist,
            'js' : _dist + '/js',
            'css' : _dist + '/css',
            'img' : _dist + '/img',
        }
    },
// Webpack - Stream Configuration
    webpack: {
            output: {
                filename: 'app.js'
            },
            watch: true,
            module: {
                loaders: [
                  {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel'
                  }
                ]
            }
    },
// BrowserSync Configuration
    browserSync: {
        server: {
          baseDir: _dist
        }
    },
};
