import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Services from './Services.vue'
import Home from './Home.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/services', name: 'services', component: Services },
    { path: '/', name: 'home', component: Home }
  ]
  
  const router = new VueRouter({
    routes,
    mode: 'history'
  })

  export default router