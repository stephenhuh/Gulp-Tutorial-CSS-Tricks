var gulp = require('gulp');
//require the gulp-sass plugin
var sass = require('gulp-sass');

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

//gulp.watch('files-to-watch', ['tasks', 'to', 'run']);
//gulp.watch('app/scss/**/*.scss', ['sass']);


//watch more than one file type
gulp.task('watch', function(){
	gulp.watch('app/scss/**/*.scss', ['sass-v2']);
});










