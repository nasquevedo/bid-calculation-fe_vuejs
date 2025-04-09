import { createRouter, createWebHistory } from 'vue-router'
import BidCalculation from '../views/BidCalculationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Bid Calculation',
      component: BidCalculation
    }
  ],
})

export default router
