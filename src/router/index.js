import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Start from "../views/Start.vue";
// import footer from "../components/footer.vue";
// import header from "../components/header.vue";
// import main from "../components/main.vue";

const routes = [
  {
    path: '/',
    name: 'Start',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component :Start
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'main',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/newmain.vue')
  },
  {
    path: '/header',
    name: 'header',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/newheader.vue')
  },{
    path: '/footer',
    name: 'footer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/newfooter.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
