// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Cube from 'cube-ui' // 一般直接放在这个位置

import App from './App'
import router from './router'
import "../static/css/reset.css"
import $ from 'jquery'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/store';
import VueJsonp from 'vue-jsonp'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//自己封装的插件
import Toast from "./moudle/toast.js"
import "./moudle/css/toast.css"

//日历插件
import '../static/css/simple-calendar.css'
import dateInstantiate from '../static/js/simple-calendar.js'
Vue.prototype.dateInstantiate = dateInstantiate

//layUI
import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue);

import VueResouse from 'vue-resource'

import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
Vue.use(iView)

//video
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

import './components/global.js'

Vue.use(VueJsonp)
Vue.use(VueResouse)
Vue.use(ElementUI)
Vue.use(Toast)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
