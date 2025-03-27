import { createRouter, createWebHistory } from 'vue-router';
import UserPage from '@/views/UserPage.vue';
import OrdersPage from '@/views/OrdersPage.vue';
import CreateOrderPage from '@/views/CreateOrderPage.vue';

const routes = [
    {
        path: '/',
        redirect: '/users/1',
    },
    {
        path: '/users/:userId',
        component: UserPage,
    },
    {
        path: '/users/:userId/orders',
        component: OrdersPage,
    },
    {
        path: '/users/:userId/create-order',
        component: CreateOrderPage,
    },
    /*{
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/NotFound.vue'), // optional 404 page
    },*/
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;