// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import './plugins/element.js'
import 'animate.css'
import './assets/css/display.css'
import './assets/css/font-awesome.min.css'

import store from './store/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
