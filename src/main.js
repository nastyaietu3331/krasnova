import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Main from './components/main.vue'
import Employee from './components/employees.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {path: '/main', component:Main},
    {path: '/employees', component:Employee},
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
