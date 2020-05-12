import Vue from "vue";
import VueRouter from "vue-router";
import StronaGlowna from "../views/StronaGlowna.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "StronaGlowna",
    component: StronaGlowna
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Kontakt.vue")
  },
  {
    path: "/oferta",
    name: "Oferta",
    component: () => import("../views/Oferta.vue")
  },
  {
    path: "/cennik",
    name: "Cennik",
    component: () => import("../views/Cennik.vue")
  },
  {
    path: "/faq",
    name: "FAQ",
    component: () => import("../views/FAQ.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
