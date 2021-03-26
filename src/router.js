import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Blank from '@/views/Blank.vue'
import Overview from '@/views/Overview.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/blank',
    name: 'blank',
    component: Blank
  }, {
    path: '/overview',
    name: 'overview',
    component: Overview
  } 
]
})
