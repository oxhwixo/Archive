1. 다운로드

    ~~~
    npm init
    npm install react --save
    npm install react-dom --save
    
    npm i webpack webpack-cli webpack-dev-server --save
    
    npm i babel-loader css-loader style-loader
    npm i @babel/core @babel/preset-react @babel/preset-env
    
    npm install --save-dev html-webpack-plugin
    npm install --save-dev clean-webpack-plugin
    ~~~

2. public, src 폴더 생성

3. public 안에 index.html, src 안에 index.js (App.js 분리해도 됨)생성

   1.  index.html - body 안에 id가 root인 div 생성

   2.  index.jsx

      ~~~js
      import React from "react";
      import ReactDOM from "react-dom/client";
      
      const App = () => {
        return (
          <>
            <h2>Hello</h2>
          </>
        );
      };
      
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App />);
      
      ~~~

4. webpack.config.js 파일 생성

   ~~~js
   const webpack = require('webpack');
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   const { CleanWebpackPlugin } = require('clean-webpack-plugin');
   const path = require('path');
   
   module.exports = {
       mode: process.env.mode,
       entry: './src/index.js',
       output: {
         path: path.resolve(__dirname, 'dist'),
         filename: '[hash].js',
         publicPath: '/'
       },
       resolve: {
        
         extensions: ['.js', '.jsx', '.css']
       },
       module: {
           rules: [
               {
                   test: /\.(js|jsx)$/,
                   exclude: '/node_modules/',
                   loader: 'babel-loader'
               },
               {
                   test: /\.css$/,
                   use: [
                       {
                           loader: 'style-loader', 
                       },
                       {
                           loader: 'css-loader', 
                       },
                   ]
               }
           ]
       },
       plugins: [
           new CleanWebpackPlugin(),
           new HtmlWebpackPlugin({
               template: './public/index.html'
           })
       ],
       devServer: {
           host: 'localhost',
           port: 3000,
           hot: true,
           open: true
       }
   };
   ~~~

5. babel.config.js 파일 생성

   ~~~js
   module.exports = {
     presets: [
       "@babel/preset-env",
       ["@babel/preset-react", { runtime: "automatic" }],
     ],
   };
   ~~~

6. package.json 의 script에 아래 내용 추가

   ~~~
   "start": "webpack serve --progress --mode development",
   "build": "webpack"
   ~~~

   