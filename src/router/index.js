import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHomePage from '@/views/HomePage/index.vue'
import TheServicesPage from '@/views/TheServicesPage.vue'
// import Home from './Home.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/home', name: 'home', component: TheHomePage },
    { path: '/services', name: 'services', component: TheServicesPage }
    // { path: '/', name: 'home', component: Home }
  ]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router