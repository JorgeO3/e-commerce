
import {
    createRouter,
    createWebHashHistory,
    type RouteRecordRaw,
  } from 'vue-router';
import { ecommerceRoutes } from './modules/e-commerce/routes';
import { adminRoutes } from './modules/admin/routes';
import { authRoutes } from './modules/auth/routes';

// import { useAuthStore } from './modules/auth/composables/useAuthStore';

const routes: RouteRecordRaw[] = [
	{ ...authRoutes },
	{ ...adminRoutes },
  { ...ecommerceRoutes },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, _, next) => {
//   if (to.matched[0].path !== '/admin') {
//     next();
//     return;
//   }

//   const { user } = useAuthStore();
//   const rawUser = { ...user.value };

//   rawUser.token !== undefined ? next() : router.push('/auth/login');
// });

export default router;
