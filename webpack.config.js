const path = require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin');

module.exports = {
  //Punto de entrada
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve:{
    extensions:['.js', 'jsx']
  },

  //Modulos que definen las reglas de optimización mediante loaders
  module:{

    rules:[
      //Optimización de JavaScript
      {
        test: /\.(.js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      },
      //Optimización de Html
      {
        test: /\.html$/,
        use:[
          {
            loader: 'html-loader'
          }
        ],
      }
    ]
  },

  //Plugins
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/idex.html',
      filename: './index.html'
    })
  ],
  //Servidor de salida de la App
  devServer: {
    contendBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3005,
  }
}