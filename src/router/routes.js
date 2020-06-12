import { routes as Routes } from "../constants";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: Routes.map(({ path, component }) => ({
      path,
      component
    }))
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
