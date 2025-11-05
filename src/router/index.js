import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'home.title'
    }
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('@/views/People.vue'),
    meta: {
      title: 'people.title'
    }
  },
  {
    path: '/publications',
    name: 'Publications',
    component: () => import('@/views/Publications.vue'),
    meta: {
      title: 'publications.title'
    }
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/News.vue'),
    meta: {
      title: 'news.title'
    }
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: () => import('@/views/NewsDetail.vue'),
    meta: {
      title: 'news.title'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
