const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const fileInclude = require("gulp-file-include");
const browserSync = require("browser-sync").create();

// Compile SCSS to CSS
gulp.task("styles", () => {
  const processors = [autoprefixer()];

  return gulp
    .src("scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest("css"))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

// Concatenate and minify JS
// gulp.task("scripts", () => {
//   return gulp
//     .src("js/*.js")
//     .pipe(concat("main.js"))
//     .pipe(gulp.dest("js"))
//     .pipe(uglify())
//     .pipe(rename({ suffix: ".min" }))
//     .pipe(gulp.dest("js"));
// });

// Watch for changes and reload browser
gulp.task("watch", () => {
  browserSync.init({
    server: {
      baseDir: "./", // Serve files from the root directory
    },
  });

  gulp.watch("scss/**/*.scss", gulp.series("styles"));
  // gulp.watch("js/*.js", gulp.series("scripts"));
  gulp.watch("templates/**/*.twig").on("change", browserSync.reload); // Watch template files

  // You can add more watch tasks if needed

  gulp
    .watch(["*.html", "css/*.css"]) // , "js/*.js"
    .on("change", browserSync.reload);
});

// Default task
gulp.task(
  "default",
  gulp.series("styles",  "watch") // "scripts",
);
