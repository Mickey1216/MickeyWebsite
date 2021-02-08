import { createRouter, createWebHistory } from 'vue-router'

//懒加载
const Music = () => import('views/Music')
const Movie = () => import('views/Movie')
const Tool = () => import('views/Tool')

const routes = [
  {
    path:'',
    redirect: '/music' //重定向
  },
  {
    path:'/music',
    component:Music //音乐
  },
  {
    path:'/movie',
    component:Movie //电影
  },
  {
    path:'/tool',
    component:Tool //工具
  }
]

const router = createRouter({
  history: createWebHistory(), //history模式 mode:'history'
  routes
})

export default router
