(function() {
    var clean, coffee, concat, cssmin, replace, shell, gulp, gutil, htmlmin, imagemin, jshint, livereload, rev, stylish, stylus, uglify, usemin, watch;
    gulp = require("gulp");
    gutil = require("gulp-util");
    concat = require("gulp-concat");
    uglify = require("gulp-uglify");
    usemin = require("gulp-usemin");
    imagemin = require("gulp-imagemin");
    cssmin = require("gulp-minify-css");
    htmlmin = require("gulp-minify-html");
    rev = require("gulp-rev");
    coffee = require("gulp-coffee");
    sass = require("gulp-sass");
    watch = require("gulp-watch");
    livereload = require("gulp-livereload");
    clean = require("gulp-clean");
    jshint = require("gulp-jshint");
    stylish = require("jshint-stylish");
    shell = require("gulp-shell");
    replace = require("gulp-replace");

    // gulp.task("watch", function() {
    //     var server;
    //     server = livereload();
    //     gulp.watch("app/views/*.php", function(evt) {
    //         server.changed(evt.path);
    //     });
    // });

    gulp.task("clean", function() {
        gulp.src("dist/**/*", {
            read: false
        }).pipe(clean());
    });

    gulp.task("jshint", function() {
        return gulp.src("app/assets/js/*.js").pipe(jshint()).pipe(jshint.reporter(stylish));
    });

    gulp.task("default", function() {
        gulp.src("app/src/coffee/*.coffee").pipe(watch()).pipe(coffee()).pipe(gulp.dest("app/assets/js/")).pipe(livereload());
        gulp.src("app/src/scss/*.scss").pipe(watch()).pipe(sass()).pipe(gulp.dest("app/assets/css/")).pipe(livereload());
    });

}).call(this);