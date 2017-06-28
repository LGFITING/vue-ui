import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Mint from 'mint-ui';
import VueLazyload from 'vue-lazyload';
import 'mint-ui/lib/style.css'
import routes from './router/router.js'
import store from './store'
Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1994376176,269026991&fm=117&gp=0.jpg',
  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
});

const router = new VueRouter({
    routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
