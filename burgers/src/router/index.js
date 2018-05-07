import Vue from 'vue'
import Router from 'vue-router'
import addBurger from '@/components/addBurger'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'addBurger',
      component: addBurger
    }
  ]
})
