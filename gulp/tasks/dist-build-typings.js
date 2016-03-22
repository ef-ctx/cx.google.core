(function () {
  'use strict';

  var gulp = require('gulp'),
    spawn = require('child_process').spawn;

  function distBuildTypings(appConfig) {
    return function (cb) {
        var command = 'typings',
            opts = {
                env: process.env,
                stdio: 'inherit'
            },
            args = [
                'bundle',
                '--out=' + appConfig.dist,
                '--ambient'
            ],
            gulpSpawn;

        gulpSpawn = spawn(command, args, opts);
        gulpSpawn.on('close', function (code) {
            var error;

            if (code && 65 !== code) {
                error = new gutil.PluginError(plugin.name, plugin.name + ': returned ' + code);
            }

            cb(error);
        });
    };
  };

  exports.task = distBuildTypings;
  exports.dependencies = [];
}());
