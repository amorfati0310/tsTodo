const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env,options) => {
  const config = {
    entry: './src/ts/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'todo ts',
        filename: '[name].html',
        template: `./src/assets/index.html`,
      })
    ]

  };
  if(options.mode === 'development') {
    //... Development 설정
    config.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'Development',
        minify: {
          collapseWhitespace: true // 문서의 텍스트 노드에서 공백을 제거합니다.
        },
        hash: true,
        showErrors: true, // 에러 발생시 메세지가 브라우저 화면에 노출 된다.
        template: `./src/assets/index.html`,
      })
    ];
    config.devtool = 'inline-source-map';
    config.devServer = {
      hot: true, // 서버에서 HMR을 켠다.
      host: '0.0.0.0', // 디폴트로는 "localhost" 로 잡혀있다. 외부에서 개발 서버에 접속해서 테스트하기 위해서는 '0.0.0.0'으로 설정해야 한다.
      contentBase: './dist', // 개발서버의 루트 경로
      stats: {
        color: true
      }
    };
  } else {
    //... Production 설정

  }
  return config;
};
