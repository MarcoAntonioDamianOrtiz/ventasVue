import { createRouter, createWebHistory } from 'vue-router'
import ShopVue from '../views/ShopView.vue'
import AdminLayout from '@/views/admin/AdminLayout.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shop',
      component: ShopVue,
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => AdminLayout,
      children: [
        {
          path: 'productos',
          name: 'products',
          component: () => import('../views/admin/ProductsView.vue')
        }
      ]
    }
  ],
})

export default router