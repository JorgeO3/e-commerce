import type { RouteRecordRaw } from 'vue-router';

import NotFoundView from './views/NotFoundView.vue';
import MetricsView from './views/MetricsView.vue';
import PaymentsView from './views/PaymentsView.vue';
import ProductsView from './views/ProductsView.vue';
import UsersView from './views/UsersView.vue';

export const ecommerceRoutes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('./views/LayoutView.vue'),
		children: [
			{ path: 'users', name: 'users', component: UsersView  },
			{ path: 'metrics', name: 'metrics', component: MetricsView  },
			{ path: 'payments', name: 'payments', component: PaymentsView  },
			{ path: 'products', name: 'products', component: ProductsView  },
			{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
		]
	}
];