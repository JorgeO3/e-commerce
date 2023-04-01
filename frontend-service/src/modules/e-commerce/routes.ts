import type { RouteRecordRaw } from 'vue-router';

import BlogView from './views/BlogView.vue';
import CartView from './views/CartView.vue';
import HomeView from './views/HomeView.vue';
import AboutUsView from './views/AboutUsView.vue';
import CatalogView from './views/CatalogView.vue';
import ContactView from './views/ContactView.vue';
import NotFoundView from './views/NotFoundView.vue';
import InformationView from './views/InformationView.vue';
import PrivacyPolicyView from './views/PrivacyPolicyView.vue';
import TermsConditionsView from './views/TermsConditionsView.vue';

export const ecommerceRoutes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('./views/LayoutView.vue'),
		children: [
			{ path: 'home', name: 'home', component: HomeView },
			{ path: 'blog', name: 'blog', component: BlogView },
			{ path: 'cart', name: 'cart', component: CartView },
			{ path: 'about', name: 'about', component: AboutUsView },
			{ path: 'info', name: 'info', component: InformationView },
			{ path: 'contact', name: 'contact', component: ContactView },
			{ path: 'catalog', name: 'catalog', component: CatalogView },
			{ path: 'terms', name: 'terms', component: TermsConditionsView },
			{ path: 'privacy', name: 'privacy', component: PrivacyPolicyView },
			{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
		]
	}
];