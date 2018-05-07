import Vue from 'vue'
import Router from 'vue-router'
import addBurger from '@/components/addBurger'
import about from '@/components/about'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'addBurger',
      component: addBurger
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
