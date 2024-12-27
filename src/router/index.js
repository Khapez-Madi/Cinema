import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import MoviePage from '@/views/MoviePage.vue';
import Contacts from '@/views/Contacts.vue';

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/movie/:id', component: MoviePage, name: 'MoviePage' },
  { path: '/contacts', component: Contacts, name: 'Contacts' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
