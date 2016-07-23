#Resources
1. [GulpJS](http://gulpjs.com/)  
2. [Gulp-Sass](https://www.npmjs.com/package/gulp-sass)  
3. [Browsersync](https://browsersync.io/)  
4. [Wikipedia on Globs](https://en.wikipedia.org/wiki/Glob_(programming))
5. [NPM](https://docs.npmjs.com)

#Points
* What IS gulp and what problems does it attempt to solve?
* What are some example tasks gulp can solve?
* Gulp ideology vs Grunt
* What are the four main Gulp methods?
* What does the **/* pattern mean in file globbing?
* +(A|B) significance in globbing?
* How to exclude files from globbing?
* Difference between globbing and regexes?

#Notes
##What is Gulp
Built on Node Streams - so node is needed
Streaming build system (or task runner)- essentially allows you to automate tasks in development but uses streams to avoid writing files, making it run faster.
Examples: minification, browsersync, sass to css compile, transpiling, continuous integration, unit tests

##Gulp v Grunt
Grunt focuses on configuration, while Gulp focuses on code
Grunt was built around a set of built-in, and commonly used tasks, while Gulp came around with the idea of enforcing nothing, but how community-developed micro-tasks should connect to each other


##Main methods
###gulp.src(globs[, options])
Emits files matching provided glob or an array of globs. Returns a stream of Vinyl files that can be piped to plugins.
gulp.src tells the Gulp task what files to use for the task
###gulp.dest(path[, options])
can be piped to and it will write files. Re-emits all data passed to it so you can pipe to multiple folders. Folders that don't exist will be created.
gulp.dest tells Gulp where to output the files once the task is completed.
###gulp.task(name [, deps] [, fn])
Define a task using Orchestrator.
name of task, dependencies - tasks to be run prior to running gulp task, function definition
###gulp.watch(glob [, opts], tasks) or gulp.watch(glob [, opts, cb])
Watch files and do something when a file changes. This always returns an EventEmitter that emits change events.
tasks is an array

##Globs
In computer programming, in particular in a Unix-like environment, glob patterns specify sets of filenames with wildcard characters. 

##Globbing and Regular Expressions are different
* the ? is a quantifier for Regex but ? is any single char in globbing. The glob ? is equal to . in r.e. and glob * is .* in r.e.
* the * is a kleene star for regex but * is any number of chars including none in globbing. 
* Globs attempt to match FULL filenames whereas regexes attempt to match patterns as substrings:w

##Common Glob Patterns
*.scss -- match any file with .scss extension within current directory.
**/*.scss -- match any file with .scss extension within current directory and child directories.
!not-me.scss -- exclude this file
*.+(scss|sass) -- match any file ending in either scss or sass within current directory
[abc] -- match any character within brackets
[a-z] -- match any character in lowercase alphabet

##MISC
$npm install --save-dev used to save to devdependencies in package.json as opposed to --save which goes directly to dependencies
peer dependencies:
They tell NPM 'I need this package, but I need the version that is part of the project, not some version private to my module'. When NPM sees that your package is being installed into a project that does not have that dependency, or that has an incompatible version of it, it will warn the user during the installation process.
#Where to go:
Learn more about Node streams
 





