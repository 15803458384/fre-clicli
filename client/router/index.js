import Router from 'vue-router'

const Home = () => import('component/home/home.vue')
const ArticleDetail = () => import('component/post-detail/post-detail.vue')
const Sort = () => import('component/sort/sort.vue')


export default () => {
  return new Router({
    mode: 'history',
    fallback: false,
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/post/:id',
        component: ArticleDetail
      },
      {
        path: '/sort/:sort',
        component: Sort
      }
    ],
    scrollBehavior(to) {
      return {
        x: 0,
        y: 0
      }
    }
  })
}
