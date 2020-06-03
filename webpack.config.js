const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
   entry: './src/index.jsx',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   module: {
      rules: [
         {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-react']
               }
            }
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './public/index.html',
         filename: 'index.html'
      })
   ]
}