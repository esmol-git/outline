const uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  scriptsPATH = {
    input: "./dev/static/js/",
    output: "./build/static/js/"
  },
  babel = require("gulp-babel");

module.exports = function () {
  $.gulp.task("libsJS:dev", () => {
    return $.gulp
      .src([
        "node_modules/svg4everybody/dist/svg4everybody.min.js",
        "node_modules/slick-carousel/slick/slick.min.js",
        "node_modules/remodal/dist/remodal.min.js",
        "node_modules/isotope-layout/dist/isotope.pkgd.min.js",
        "node_modules/magnific-popup/dist/jquery.magnific-popup.min.js",
        "node_modules/mmenu-js/dist/mmenu.js",
        "node_modules/readmore-js/readmore.js",
        "node_modules/wowjs/dist/wow.min.js",
        "node_modules/jquery.ripples/dist/jquery.ripples-min.js"

      ])
      .pipe(concat("libs.min.js"))
      .pipe($.gulp.dest(scriptsPATH.output));
  });

  $.gulp.task("libsJS:build", () => {
    return $.gulp
      .src([
        "node_modules/svg4everybody/dist/svg4everybody.min.js",
        "node_modules/slick-carousel/slick/slick.min.js",
        "node_modules/remodal/dist/remodal.min.js",
        "node_modules/isotope-layout/dist/isotope.pkgd.min.js",
        "node_modules/magnific-popup/dist/jquery.magnific-popup.min.js",
        "node_modules/mmenu-js/dist/mmenu.js",
        "node_modules/readmore-js/readmore.js",
        "node_modules/wowjs/dist/wow.min.js",
        "node_modules/jquery.ripples/dist/jquery.ripples-min.js"

      ])
      .pipe(concat("libs.min.js"))
      .pipe(uglify())
      .pipe($.gulp.dest(scriptsPATH.output));
  });

  $.gulp.task("js:dev", () => {
    return $.gulp
      .src([
        scriptsPATH.input + "*.js",
        "!" + scriptsPATH.input + "libs.min.js"
      ])
      .pipe(
        babel({
          presets: ["@babel/env"]
        })
      )
      .pipe($.gulp.dest(scriptsPATH.output))
      .pipe(
        $.browserSync.reload({
          stream: true
        })
      );
  });

  $.gulp.task("js:build", () => {
    return $.gulp
      .src([
        scriptsPATH.input + "*.js",
        "!" + scriptsPATH.input + "libs.min.js"
      ])
      .pipe(
        babel({
          presets: ["@babel/env"]
        })
      )
      .pipe($.gulp.dest(scriptsPATH.output));
  });

  $.gulp.task("js:build-min", () => {
    return $.gulp
      .src([
        scriptsPATH.input + "*.js",
        "!" + scriptsPATH.input + "libs.min.js"
      ])
      .pipe(concat("main.min.js"))
      .pipe(uglify())
      .pipe($.gulp.dest(scriptsPATH.output));
  });
};