import type { RouteRecordRaw } from 'vue-router';

import LoginViewVue from './views/LoginView.vue';
import RegisterView from './views/RegisterView.vue';
import RecoveryView from './views/RecoveryView.vue';
import NotFoundView from './views/NotFoundView.vue';

export const authRoutes: RouteRecordRaw[] = [
	{
		path: '/auth',
		component: () => import('./views/LayoutView.vue'),
		children: [
			{ path: 'login', name: 'login', component: LoginViewVue },
			{ path: 'register', name: 'login', component: RegisterView },
			{ path: 'recovery', name: 'login', component: RecoveryView },
			{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
		]
	}
];