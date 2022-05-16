import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ControlsView from '@/views/ControlsView.vue'
import StatsView from '@/views/StatsView.vue'
import PricesView from '@/views/PricesView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: DashboardView
		},
		{
			path: '/controls',
			name: 'controls',
			component: ControlsView
		},
		{
			path: '/stats',
			name: 'stats',
			component: StatsView
		},
		{
			path: '/prices',
			name: 'prices',
			component: PricesView
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView
		}
	]
})

export default router
