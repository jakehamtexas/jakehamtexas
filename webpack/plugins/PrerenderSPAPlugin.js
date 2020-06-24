const { join } = require("path");

const { sitemapRoutes } = require("../../src/constants/sitemapRoutes.js");
const Plugin = require("prerender-spa-plugin");

exports.default = new Plugin({
  staticDir: join(__dirname, "../../dist/spa"),
  routes: sitemapRoutes.map(({ path }) => path)
});
