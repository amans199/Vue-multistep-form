import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import reqpro from "../views/req-product.vue";
import FirstStep from '../components/steps/FirstStep.vue';
import SecondStep from '../components/steps/SecondStep.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/req-product",
    name: "req-product",
    component: () =>
      import("../views/req-product.vue")
  },
  { path: "/organization-info", name: "firstStep", component: FirstStep },
  { path: "/personal-info", name: "secondStep", component: SecondStep }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
