import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import NewsDetail from "../views/NewsDetail.vue";
import ProductDetail from "../views/ProductDetail.vue";
import Element from "../views/Element.vue";
import ProductFolder from "../views/ProductFolder.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/tin-tuc",
    name: "News",
    component: News
  },
  {
    path: "/tin-tuc-detail",
    name: "NewsDetail",
    component: NewsDetail
  },
  {
    path: "/product-detail",
    name: "ProductDetail",
    component: ProductDetail
  },
  {
    path: "/element",
    name: "Element",
    component: Element
  },
  {
    path: "/product-folder",
    name: "ProductFolder",
    component: ProductFolder
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
