const { sitemapRoutes } = require("../../src/constants/sitemapRoutes");
const Plugin = require("prerender-spa-plugin");

exports.default = new Plugin({
  staticDir: path.join(__dirname, "dist"),
  routes: sitemapRoutes.map(({ to }) => to)
});
