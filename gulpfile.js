const { src, parallel, dest } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const uglifycss = require("gulp-uglifycss");
const del = require("del");
const rename = require("gulp-rename");

function mergeLibs() {
  const libs = [
    "vendor/jquery-1.12.4.min.js",
    "fontawesomepro/fontawesome.min.js",
    "fontawesomepro/regular.min.js",
    "fontawesomepro/light.min.js",
    "fontawesomepro/solid.min.js",
    "fontawesomepro/brands.min.js",
    "popper.min.js",
    "bootstrap.min.js",
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
    "wow.min.js",
  ];

  return src(libs, { cwd: "./src/static/lib/", sourcemaps: true })
    .pipe(concat("twain.libs.js"))
    .pipe(dest("_site/lib/"));
}

function mergeCssLibs() {
  const sheets = [
    "css/bootstrap.min.css",
    "css/animate.min.css",
    "css/custom-animation.css",
    "css/bootstrap-datepicker.css",
    "css/nice-select.css",
    "fonts/flaticon.css",
    "css/magnific-popup.css",
    "css/aos.css",
    "css/meanmenu.css",
    "css/owl.carousel.min.css",
    "css/slick.css",
  ];

  return src(sheets, { cwd: "./src/static/" })
    .pipe(uglifycss())
    .pipe(concat("twain.libs.css"))
    .pipe(dest("_site/css/"));
}

function mergeCss() {
  const sheets = ["css/style.css", "css/responsive.css"];

  return src(sheets, { cwd: "./src/static/" })
    .pipe(concat("twain.theme.css"))
    .pipe(dest("_site/css/"));
}

function siteJs() {
  return src(
    [
      "src/_includes/js/plugins.js",
      "src/_includes/js/main.js",
      "src/_includes/js/site.js",
    ],
    { allowEmpty: true }
  )
    .pipe(uglify())
    .pipe(concat("twain.min.js"))
    .pipe(dest("_site/js/"));
}

exports.mergeCss = mergeCss;
exports.mergeCssLibs = mergeCssLibs;
exports.siteJs = siteJs;
exports.mergeLibs = mergeLibs;
exports.default = parallel(mergeCss, siteJs, mergeLibs, mergeCssLibs);
