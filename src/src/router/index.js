import { createWebHistory, createRouter } from "vue-router";


const routes = [
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
    scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    }
});