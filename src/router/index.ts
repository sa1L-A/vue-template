import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('@/pages/HomePage.vue') },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
