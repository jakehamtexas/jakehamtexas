const { sitemapRoutes } = require("../../src/constants/sitemapRoutes");
const url = "https://www.jakehamilton.net";

const Plugin = require("sitemap-webpack-plugin").default;
exports.default = new Plugin(url, sitemapRoutes);
