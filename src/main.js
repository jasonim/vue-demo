// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
// 引入滑动模块
import vueResource from 'vue-resource'
import infiniteScroll from 'vue-infinite-scroll'
import vueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(infiniteScroll)
Vue.use(vueLazyload)
Vue.use(vueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
