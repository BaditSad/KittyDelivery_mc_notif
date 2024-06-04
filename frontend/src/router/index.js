import { createRouter, createWebHistory } from 'vue-router'
import ClientPage from '@/components/ClientPage.vue'
import ProfilePage from '@/components/ProfilePage.vue'
import CheckOutPage from '@/components/CheckOutPage.vue'
import SelectMealPage from '@/components/SelectMealPage.vue'
import DeliveryTrackingPage from '@/components/DeliveryTrackingPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/client'
  },
  {
    path: '/client',
    name: 'client',
    component: ClientPage
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckOutPage
  },
  {
    path: '/selectmeal',
    name: 'selectmeal',
    component: SelectMealPage
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: DeliveryTrackingPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
