const { src, parallel, dest } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const uglifycss = require("gulp-uglifycss");
const del = require("del");
const rename = require("gulp-rename");

function libs() {
  return src([
    "node_modules/@fortawesome/fontawesome-free/js/brands.min.js",
    "node_modules/@fortawesome/fontawesome-free/js/solid.min.js",
    "node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js",
  ])
  .pipe(dest("_site/lib/"));
}

function siteJs() {
  return src([
    "src/_includes/js/plugins.js", 
    "src/_includes/js/main.js", 
    "src/_includes/js/site.js"
  ], { allowEmpty: true })
  .pipe(uglify())
  .pipe(concat("twain.min.js"))
  .pipe(dest("_site/js/"));
}

exports.siteJs = siteJs;
exports.libs = libs
exports.default = parallel(siteJs, libs);
