import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

let routes = {
  homeroutes : require("./routes/routes"),
}
Vue.config.productionTip = false

Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  routes
}).$mount('#app')
