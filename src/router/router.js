import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  //DOCUMENTATION mode:"history" => geen # in de url
  mode: "history",
  //base: process.env.BASE_URL, // "/"
  base: "/feeleboom/",
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        // DOCUMENTATION webpackChunkName : Lazy Load (Code Splitting) : zelf de naam van de .js file kiezen
        import(/* webpackChunkName: "person" */ "@/views/TheHomePage.vue")
    },
    {
      path: "/lessen",
      name: "lessen",
      component: () =>
          // DOCUMENTATION webpackChunkName : Lazy Load (Code Splitting) : zelf de naam van de .js file kiezen
          import(/* webpackChunkName: "person" */ "@/views/TheLessenPage.vue")
    },
    {
      path: "/inschrijven",
      name: "inschrijven",
      component: () =>
          // DOCUMENTATION webpackChunkName : Lazy Load (Code Splitting) : zelf de naam van de .js file kiezen
          import(/* webpackChunkName: "person" */ "@/views/TheInschrijvenPage.vue")
    },
    {
      path: "/wegwijzer",
      name: "wegwijzer",
      component: () =>
          // DOCUMENTATION webpackChunkName : Lazy Load (Code Splitting) : zelf de naam van de .js file kiezen
          import(/* webpackChunkName: "person" */ "@/views/TheWegwijzerPage.vue")
    },
    {
      path: "/fotos",
      name: "fotos",
      component: () =>
          // DOCUMENTATION webpackChunkName : Lazy Load (Code Splitting) : zelf de naam van de .js file kiezen
          import(/* webpackChunkName: "person" */ "@/views/TheFotoPage.vue")
    },
    {
      path: "/over",
      name: "over",
      component: () =>
          // DOCUMENTATION webpackChunkName : Lazy Load (Code Splitting) : zelf de naam van de .js file kiezen
          import(/* webpackChunkName: "person" */ "@/views/TheOverPage.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
          // DOCUMENTATION webpackChunkName : Lazy Load (Code Splitting) : zelf de naam van de .js file kiezen
          import(/* webpackChunkName: "person" */ "@/views/TheContactPage.vue")
    }
  ]
});
router.replace({ path: '*', redirect: '/' })
export default router;
