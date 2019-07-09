import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () =>
        import(/* webpackChunkName: "layout" */ './layouts/BasicLayout'),
      redirect: '/chapter1',
      children: [
        {
          path: '/chapter1',
          name: 'chapter1',
          component: { render: h => h('router-view') },
          children: [
            {
              path: '/chapter1/article1',
              name: 'book1.1'
            }
          ]
        }
      ]
    }
  ]
})
