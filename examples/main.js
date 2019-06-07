// import './assets/style.css';
// import './assets/index.scss';
// var demo = function (argument) {
//    return {}
// }
import Vue from 'vue'
import App from './App'
// 
// import webpcak4_demo from '../static/lib/webpcak4_demo.common.js'
import Tabbar from '../src/index.js'
// Vue.use(webpcak4_demo)
// import { Tabbar } from '../static/lib/index.js'
console.log(Tabbar, 'webpcak4_demo')
Vue.use(Tabbar)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})


