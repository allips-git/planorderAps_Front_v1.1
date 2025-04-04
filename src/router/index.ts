import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/index.vue'
import CustomerSupport from '@/views/CustomerSupport.vue'
import SystemInfo from '@/views/SystemInfo.vue'
import Pay from '@/views/Pay.vue'

const router = createRouter({
	history	: createWebHistory(import.meta.env.BASE_URL),
	routes	: [
		{
			/** 대시보드 메인 */
			path: '/',
			name: 'home',
			component: home
		},
		{
			/** 고객지원 */
			path: '/customersupport',
			name: 'CustomerSupport',
			component: CustomerSupport
		},
		{
			/** 시스템 관리 */
			path: '/systeminfo',
			name: 'SystemInfo',
			component: SystemInfo
		},
		{
			/** 결제 관리 */
			path: '/systeminfo',
			name: 'SystemInfo',
			component: SystemInfo
		}
	],
})

export default router
