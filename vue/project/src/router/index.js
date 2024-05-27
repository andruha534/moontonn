import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmptyView from '../views/EmptyView.vue'

const router = createRouter({
  history: createMemoryHistory(),
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/coin',
      name: 'coin',
      component: EmptyView
    },
    {
      path: '/friends',
      name: 'friends',
      component: EmptyView
    },
    {
      path: '/upgrade',
      name: 'upgrade',
      component: EmptyView
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: EmptyView
    }
  ]
})

export default router
