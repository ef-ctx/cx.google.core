(function () {
  'use strict';

  var gulp = require('gulp'),
    merge = require('merge2'),
    ts = require('gulp-typescript');

  function distBuild(appConfig) {
    return function () {
      var tsProject = ts.createProject(appConfig.typescript.tsconfig),
        files = appConfig.src.distTs.concat(appConfig.src.typings),
        result = gulp.src(files).pipe(ts(tsProject.options));

      return merge([
        result.js
          .pipe(gulp.dest(appConfig.dist))
      ]);
    };
  };

  exports.task = distBuild;
  exports.dependencies = [
    'karma'
  ];
}());
