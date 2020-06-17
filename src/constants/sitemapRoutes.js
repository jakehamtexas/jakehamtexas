const moment = require("moment");

const getW3FormattedShortDateString = dateObject =>
  moment(dateObject || new Date()).format("YYYY-MM-DD");

const CHANGE_FREQ = {
  daily: "daily",
  monthly: "monthly",
  yearly: "yearly",
  weekly: "weekly",
  hourly: "hourly",
  never: "never",
  always: "always"
};

const websiteSeoStartDate = new Date(2020, 6, 15);

exports.sitemapRoutes = [
  {
    path: "/",
    names: ["Me"],
    lastmod: getW3FormattedShortDateString(websiteSeoStartDate),
    priority: 0.5,
    changefreq: CHANGE_FREQ.monthly
  },
  {
    path: "/resume",
    names: ["Resume"],
    lastmod: getW3FormattedShortDateString(websiteSeoStartDate),
    priority: 0.9,
    changefreq: CHANGE_FREQ.monthly
  }
  // {
  //   path: "/projects",
  //   names: ["Projects"],
  //   lastmod: getW3FormattedShortDateString(websiteSeoStartDate),
  //   priority: 0.9,
  //   changefreq: CHANGE_FREQ.daily
  // }
  // {
  //   path: "/coffee",
  //   names: ["Coffee", "Buy Me A Coffee"],
  //   lastmod: getW3FormattedShortDateString(websiteSeoStartDate),
  //   priority: 0.5,
  //   changefreq: CHANGE_FREQ.never
  // }
];
