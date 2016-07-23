var gulp = require('gulp');
//require the gulp-sass plugin
var sass = require('gulp-sass');
//create an unnamed instance of browserSync
//see: https://browsersync.io/docs/api#api-create
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

//first test function
gulp.task('hello', function(){
	console.log('Hello Zell!');
});

//more generic gulp task template
gulp.task('task-name', function(){
	return gulp.src('source-files') // Get source files with gulp.src
		.pipe(aGulpPlugin())		// Sends it through a gulp plugin
		.pipe(gulp.dest('destination')); // Outputs the file in the destination folder
});


gulp.task('sass-v1', function(){
	return gulp.src('app/scss/styles.scss')
		.pipe(sass()) //convert SASS to CSS with gulp-sass
		.pipe(gulp.dest('app/css'));
});

//globbing
gulp.task('sass-v2', function(){
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass()) //convert SASS to CSS with gulp-sass
		.pipe(gulp.dest('app/css'));
});

//basic syntax

gulp.watch('files-to-watch', ['tasks', 'to', 'run']);
gulp.watch('app/scss/**/*.scss', ['sass-v2']);


//watch more than one file type
gulp.task('watch', function(){
	gulp.watch('app/scss/**/*.scss', ['sass-v2']);
});


//browsersync
gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: 'app'
		},
	});
});


//sass for browsersync
gulp.task('sass-v3', function(){
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass()) //convert SASS to CSS with gulp-sass
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({ //reload the browser for ya
			stream: true
		}));
});


//watch with browsersync 
//-- create a task watchv2 that initializes browsersync 
//-- before watching the scss files 
gulp.task('watch-v2', ['browserSync'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass-v3']);
});


//add watch and reload on other files - notice that you can pass a function into the watch task
gulp.task('watch-v3', ['browserSync', 'sass-v3'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass-v3']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.css', browserSync.reload);
});


gulp.task('useref', function(){
	return gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulp.dest('dist'));
});

gulp.task('useref-v2', function(){
	return gulp.src('app/*.html')
		.pipe(useref())
		//minifies only if a JS file
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulp.dest('dist'));
});
