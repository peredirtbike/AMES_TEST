import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import ClientList from '../views/ClientList.vue';
import ClientForm from '../views/ClientForm.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/clients',
      component: ClientList
    },
    {
      path: '/clients/:id',
      component: ClientForm
    },
    {
      path: '/clients/new',
      component: ClientForm
    }
  ]
})

export default router
