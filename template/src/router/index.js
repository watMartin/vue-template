import Vue from 'vue'
import Router from 'vue-router'
import notFoundComponent from '@/components/notFoundComponent'
import hello from '@/components/hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'Hello', component: hello },
    { path: '*', component: notFoundComponent }
  ]
})
