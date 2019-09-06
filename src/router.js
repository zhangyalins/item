import Vue from "vue";
import Router from "vue-router";

// 组件
import main from "./components/Main";
import tab from "./components/module/Tab";
import collapse from "./components/module/Collapse";
import progressBar from "./components/module/ProgressBar";
import shop from "./components/module/Shop";
import transfer from "./components/module/TranSfer";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: main,
      redirect: "/tab",
      children: [
        {
          path: "/tab",
          name: "tab",
          component: tab
        },
        {
          path: "/collapse",
          name: "collapse",
          component: collapse
        },
        {
          path: "/progressBar",
          name: "progressBar",
          component: progressBar
        },
        {
          path: "/shop",
          name: "shop",
          component: shop
        },
        {
          path: "/transfer",
          name: "transfer",
          component: transfer
        }
      ]
    }
  ]
});
