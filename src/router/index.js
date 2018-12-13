import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component(resolve) {
        require(['../views/index.vue'], resolve);
      }
    }
  ]
})
