import Vue from 'vue'
import router from '@/router/index.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'

// The SRC css file
import '@/assets/css/main.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
