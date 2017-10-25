import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Welfare from '@/components/welfare/welfare'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/welfare',
      name: 'welfare',
      component: Welfare
    }
  ]
})
