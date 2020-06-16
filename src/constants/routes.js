import { getKey } from "../getKey";
const { sitemapRoutes } = require("./sitemapRoutes");

const getLabelFunc = names => {
  const [shortName, longName] = names;
  return isHamburgerLabel =>
    isHamburgerLabel ? shortName : longName || shortName;
};

export const routes = sitemapRoutes.map(sitemapRoute => ({
  key: getKey(),
  label: getLabelFunc(sitemapRoute.names),
  to: sitemapRoute.path,
  ...sitemapRoute
}));
