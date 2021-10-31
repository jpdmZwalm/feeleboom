import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  //DOCUMENTATION mode:"history" => geen # in de url
  mode: "history",
  base: process.env.BASE_URL, // "/"
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        // DOCUMENTATION webpackChunkName : Lazy Load (Code Splitting) : zelf de naam van de .js file kiezen
        import(/* webpackChunkName: "person" */ "@/views/TheHomePage.vue")
    },
    {
      path: "/TheOverPage",
      name: "over",
      component: () =>
          // DOCUMENTATION webpackChunkName : Lazy Load (Code Splitting) : zelf de naam van de .js file kiezen
          import(/* webpackChunkName: "person" */ "@/views/TheOverPage.vue")
    }
  ]
});
router.replace({ path: '*', redirect: '/' })
export default router;
