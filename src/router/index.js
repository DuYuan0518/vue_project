import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../pages/myHome/MyHome'),
    },
    {
      path: '/home',
      component: () => import('../pages/myHome/MyHome'),
    },
    {
      path: '/cart',
      component: () => import('../pages/myCart/MyCart'),
    },
    {
      path: '/order',
      component: () => import('../pages/myOrder/MyOrder'),
    },
    {
      path: '/mine',
      component: () => import('../pages/mine/Mine'),
    },
    {
      path: '/store',
      component: () => import('../pages/myStore/MyStore'),
    },
    {
      path: '/createorder',
      component: () => import('../pages/createOrder/CreateOrder'),
    },
  ],
});

export default router;
