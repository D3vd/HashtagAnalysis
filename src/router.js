import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Result from './views/Result.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/result/:query',
      name: 'result',
      component: Result
    }
  ]
})
