import { getKey } from "src/getKey";

export const routes = [
  {
    to: "/",
    label: _isHamburger => "Resume",
    key: getKey(),
    path: "",
    component: () => import("pages/Resume.vue")
  },
  {
    to: "/projects",
    label: _isHamburger => "Projects",
    key: getKey(),
    path: "projects",
    component: () => import("pages/Projects.vue")
  },
  {
    to: "/coffee",
    label: isHamburger => (isHamburger ? "Coffee" : "Buy Me A Coffee"),
    key: getKey(),
    path: "coffee",
    component: () => import("pages/Coffee.vue")
  }
];
