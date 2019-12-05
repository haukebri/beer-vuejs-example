import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/Home.vue");
const BeerDetail = () => import("../views/BeerDetail.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/beer/:id",
    name: "beer detail",
    component: BeerDetail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
