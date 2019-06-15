# webpcak_build

<p align="center">这个是基于webpack4.x 的一个UI组件打包示例</p>


## Quick Start

``` bash
# 安装依赖
npm install

# 开发时间运行
npm run start

# 生成 components 下的index.js 文件入口
npm run pub:entry

# 使用umd方式打包components下组件
npm run pub:conf

# 打包成common文件
npm run pub:common

# 打包components下组件
npm run pub:component

# 对components下进行babel转换
npm run pub:babel

# 打包样式文件
npm run pub:theme

# 整体打包资源
npm run public

```


## 项目结构规划

``` bash
目录结构划分
|-- build  // webpack打包编译目录
|   |-- build.js  // 项目打包入口文件
|   |-- check-versions.js  // 检查node和npm版本是否符合
|   |-- dev-client.js  // 页面自动刷新
|   |-- dev-server.js  // 启动热加载代理服务器
|   |-- utils.js  // css和style的loader定义
|   |-- webpack.base.conf.js  // 公共打包文件
|   |-- webpack.dev.conf.js  // 本地开发打包文件
|   |-- webpack.prod.conf.js  // 线上环境打包文件
|   |
|   |-- bin              // 组件库打包配置目录
|   |   |- entry.js      // 生成components目录下的index.js
|   |   |
|   |   |- conf.js       // 对components目录下的组件进行es5/es6转换配置
|   |   |
|   |   |- common.js     // 生成公共文件进行打包, 生成CDN引用js文件
|   |   |
|   |   |- config.js     // 打包文件生成输出配置
|   |   |
|   |   |- component.js  // 对components目录下的组件进行es5/es6转换配置
|   |   |
|   |   |- theme.js      // 打包UI组件库的css样式
|   
|-- config           // 项目开发环境配置目录
|   |-- index.js     // 定义环境配置
|   |-- dev.env.js   // 定义各种生产环境变量
|   |-- prod.env.js  // 定义各种上线环境变量
|
|-- src             // 源码目录
|   |   
|   |-- components  // 组件目录
|   |
|   |-- theme       // 主题样式
|   
|-- static         // 静态资源文件 (加载一次的css,图片等文件)
|   
|-- examples         // UI库 demo示例
|   
|-- test             // 自动化测试
|   
|-- components.json  // 组件配置 
|
|-- lib              // 打包后的目录
|
|-- demo             // 打包后的测试demo
|
|-- .babelrc        // ES6语法编译配置
|-- .gitignore      // git忽略配置
|-- package.json    // 项目配置依赖包文件
|-- README.md       // 项目说明文件
|-- yarn.lock       // yarn 配置

```

## 注意

<p>这里需要注意的是，有可能 node-sass 安装失败，这时候用淘宝的 cnpm 安装就能解决这个问题</p>

