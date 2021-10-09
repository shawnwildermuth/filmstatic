const { src, parallel, dest } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const uglifycss = require("gulp-uglifycss");
const del = require("del");
const rename = require("gulp-rename");

function fontAwesome() {
  return src([
    "node_modules/@fortawesome/fontawesome-free/js/brands.min.js",
    "node_modules/@fortawesome/fontawesome-free/js/solid.min.js",
    "node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js",
  ])
  .pipe(dest("_site/lib/"));
}



function mergeLibs() {

  const libs = [
    "vendor/jquery-1.12.4.min.js",
    "popper.min.js",
    "bootstrap.min.js",
    "ajax-form.js",
    "imagesloaded.pkgd.min.js",
    "isotope.pkgd.min.js",
    "jquery.meanmenu.min.js",
    "jquery.counterup.min.js",
    "jquery.waypoints.min.js",
    "jquery.magnific-popup.min.js",
    "owl.carousel.min.js",
    "tilt.jquery.js",
    "bootstrap-datepicker.min.js",
    "jquery.nice-select.min.js",
    "jquery.paroller.min.js",
    "aos.js",
    "slick.min.js",
    "wow.min.js"
  ];

  return src(libs, { cwd: "./src/static/lib/"})
    .pipe(concat("twain.libs.js"))
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
exports.libs = fontAwesome;
exports.mergeLibs = mergeLibs;
exports.default = parallel(siteJs, fontAwesome, mergeLibs);
