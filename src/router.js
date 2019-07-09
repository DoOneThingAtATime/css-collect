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
              name: 'article1.1',
              component: () =>
                import(/* webpackChunkName: "layout" */ './views/chapter1/article1.1')
            },
            {
              path: '/chapter1/article2',
              name: 'article1.2',
              component: () =>
                import(/* webpackChunkName: "layout" */ './views/chapter1/article1.2')
            }
          ]
        },
        {
          path: '/chapter2',
          name: 'chapter2',
          component: { render: h => h('router-view') },
          children: [
            {
              path: '/chapter2/article1',
              name: 'article2.1',
              component: () =>
                import(/* webpackChunkName: "layout" */ './views/chapter2/article2.1')
            },
            {
              path: '/chapter2/article2',
              name: 'article2.2',
              component: () =>
                import(/* webpackChunkName: "layout" */ './views/chapter2/article2.2'),
              children: [
                {
                  path: '/chapter2/article2/section1',
                  name: 'article2.2.1',
                  component: () =>
                    import(/* webpackChunkName: "layout" */ './views/chapter2/article2.2.1')
                },
                {
                  path: '/chapter2/article2/section2',
                  name: 'article2.2.2',
                  component: () =>
                    import(/* webpackChunkName: "layout" */ './views/chapter2/article2.2.2')
                }
              ]
            },
            {
              path: '/chapter2/article3',
              name: 'article2.3',
              component: () =>
                import(/* webpackChunkName: "layout" */ './views/chapter2/article2.3'),
              children: [
                {
                  path: '/chapter2/article3/section1',
                  name: 'article2.3.1',
                  component: () =>
                    import(/* webpackChunkName: "layout" */ './views/chapter2/article2.3.1')
                },
                {
                  path: '/chapter2/article3/section2',
                  name: 'article2.3.2',
                  component: () =>
                    import(/* webpackChunkName: "layout" */ './views/chapter2/article2.3.2')
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
