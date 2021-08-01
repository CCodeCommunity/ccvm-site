import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Routes from './router'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: Routes
})

new Vue({
  render: h => h(App),
  router  
}).$mount('#app');
