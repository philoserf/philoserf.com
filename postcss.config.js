const purgecss = require("@fullhuman/postcss-purgecss");
const autoprefixer = require("autoprefixer");
module.exports = {
  plugins: [
    purgecss({
      content: ["hugo_stats.json"],
    }),
    autoprefixer({
      overrideBrowserslist: ["last 2 versions"],
    }),
  ],
};
