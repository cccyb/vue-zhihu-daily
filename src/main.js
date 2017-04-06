// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import MintUI from 'mint-ui';
// import VueScroll from 'vue-scroll';
import 'mint-ui/lib/style.css';
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false;

// 使用 MintUI
Vue.use(MintUI);

// 使用 vue-scroll
// Vue.use(VueScroll);

// 使用vue-lazyload
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1,
  listenEvents: [ 'scroll' ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
