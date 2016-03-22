(function () {
  'use strict';

  var gulp = require('gulp'),
    rimraf = require('gulp-rimraf'),
    rename = require('gulp-rename'),
    merge = require('merge2');

  function distTypings(appConfig) {
    return function (cb) {
        return merge([
          gulp.src(appConfig.dist + 'browser.d.ts')
            .pipe(rename({
                'basename': 'index'
            }))
            .pipe(gulp.dest(appConfig.dist)),
          gulp.src([appConfig.dist + 'browser.d.ts', appConfig.dist + 'main.d.ts'])
              .pipe(rimraf({ force: true })),
        ]);
    };
  };

  exports.task = distTypings;
  exports.dependencies = [
      'dist-build-typings'
  ];
}());
