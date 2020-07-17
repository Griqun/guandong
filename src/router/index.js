import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index/index.vue'),
  },
  {
    path: '/goods/detail/:id',
    name: 'goodsDetail',
    component: () => import('../views/goods/detail.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/cart.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
