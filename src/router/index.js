import { createRouter, createWebHistory } from 'vue-router'

// Import views
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path: '/',
    name: 'home',
    component: Home,
  },


  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash, // Scroll to the element with the ID matching the hash
        behavior: 'smooth', // Smooth scrolling
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router