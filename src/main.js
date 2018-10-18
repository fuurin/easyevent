// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css' // 基本ファイル
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css' // fab
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css' // far
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css' // fas

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
