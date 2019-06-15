var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../../components.json');

var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`webpcak4_demo/src/${key}`] = `webpcak4_demo/lib/${key}`;
});


externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../../src'),
  components: path.resolve(__dirname, '../../components'),
  examples: path.resolve(__dirname, '../../examples'),
  'webpcak4_demo': path.resolve(__dirname, '../../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};
exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;