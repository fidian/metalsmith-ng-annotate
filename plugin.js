/*global Buffer module require*/
'use strict';

var each = require('async').each,
    multimatch = require('multimatch'),
    ngAnnotate = require('ng-annotate');

function plugin (options) {
    options = options || {};

    var pattern = options.pattern || ['**/*.js'];
    delete options.enable;
    delete options.list;
    delete options.map;
    delete options.o;
    delete options.pattern;
    delete options.plugin;
    delete options.regexp;
    delete options.stats;

    return function (files, metalsmith, done) {
        each(
            multimatch(Object.keys(files), pattern),
            function (file, done) {
                var data = files[file];
                var result = ngAnnotate(new Buffer(data.contents).toString('utf8'), options);
                data.contents = new Buffer(result.src, 'utf8');
                return done();
            },
            done
        );
    };
}

module.exports = plugin;
