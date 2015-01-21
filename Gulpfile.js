//Using Gulp for Autoprefixing and CSS changes
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = require('gulp-watch');

gulp.task('sass', function() {
	gulp.src('./styles/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./styles'));
});

gulp.task('watch', function() {
	gulp.watch(
		'./styles/*.scss',
		['sass']
	);
});

gulp.task('default', ['sass'], function() {

});
