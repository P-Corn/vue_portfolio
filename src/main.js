import Vue from 'vue'
import router from '@/router/index.js'
import App from './App.vue'

// The SRC css file
import '@/assets/css/main.css'

// Vuetify
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';

Vue.use(vuetify)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')