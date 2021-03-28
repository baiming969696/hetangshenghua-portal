import Router from 'vue-router'

import Home from '@/views/Home.vue'
import AboutUs from '@/views/AboutUs.vue'
import PlatformService from '@/views/PlatformService.vue'
import JoinUs from '@/views/JoinUs.vue'
import ContactUs from '@/views/ContactUs.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs
  }, {
    path: '/PlatformService',
    name: 'PlatformService',
    component: PlatformService
  }, {
    path: '/JoinUs',
    name: 'JoinUs',
    component: JoinUs
  }, {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUs
  }]
})
