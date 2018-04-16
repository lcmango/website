/*
* @Author: Marte
* @Date:   2018-04-16 08:56:41
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-16 09:09:59
*/

'use strict';

var gulp = require("gulp");

var scss = require("gulp-sass");

gulp.task("default",function(){
    gulp.src("src/css/style.scss")
    .pipe(scss())
    .pipe(gulp.dest("src/css"));
})