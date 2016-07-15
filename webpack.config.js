var webpack = require('webpack');
const path = require('path')
module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: path.resolve(process.cwd(),'app/components/Main.jsx'),
      Nav: path.resolve(process.cwd(),'app/components/Nav.jsx'),
      Weather:path.resolve(process.cwd(),'app/components/Weather.jsx'),
      WeatherForm: path.resolve(process.cwd(),'app/components/WeatherForm.jsx'),
      WeatherMessage: path.resolve(process.cwd(),'app/components/WeatherMessage.jsx'),
      About: path.resolve(process.cwd(),'app/components/About.jsx'),
      Examples: path.resolve(process.cwd(),'app/components/Examples.jsx'),
      openWeatherMap: path.resolve(process.cwd(),'app/api/openWeatherMap.jsx'),
      ErrorModal: path.resolve(process.cwd(),'app/components/ErrorModal.jsx'),
      applicationStyles: path.resolve(process.cwd(),'app/styles/app.scss')
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
