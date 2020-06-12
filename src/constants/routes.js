import { getKey } from "src/getKey";

export const routes = [
  {
    to: "/",
    label: _isHamburger => "Me",
    key: getKey()
  },
  {
    to: "/resume",
    label: _isHamburger => "Resume",
    key: getKey()
  },
  {
    to: "/projects",
    label: _isHamburger => "Projects",
    key: getKey()
  },
  {
    to: "/coffee",
    label: isHamburger => (isHamburger ? "Coffee" : "Buy Me A Coffee"),
    key: getKey()
  }
];
