import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import NotHome from '../pages/NotHome.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/outside', component: NotHome }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;