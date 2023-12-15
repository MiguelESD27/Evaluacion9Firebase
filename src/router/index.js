// /src/router/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/HomeView.vue';
import HeroesList from '../components/HeroesList.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/heroes', name: 'heroes', component: HeroesList },
  { path: '*', redirect: { name: 'home' } }, // Redirigir a home en caso de ruta no encontrada
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
