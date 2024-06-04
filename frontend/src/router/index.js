import { createRouter, createWebHistory } from 'vue-router'
import ClientPage from '@/components/ClientPage.vue'
import ProfilePage from '@/components/ProfilePage.vue'

const routes = [
  {
    path: '/client',
    name: 'client',
    component: ClientPage
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
