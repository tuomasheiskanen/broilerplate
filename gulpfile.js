
var gulp 		= require('gulp'),
	stylus		= require('gulp-stylus'),
	jade		= require('gulp-jade'),
	concat		= require('gulp-concat'),
	watch 		= require('gulp-watch'),
	path		= require('path'),
	livereload 	= require('gulp-livereload');
	common 		= require('./common'),
	app		 	= require('./server');

var LIVERELOAD_PORT = 35729;
var env = process.env.ENVIRONMENT || 'development';
var config = common.config()[env];

// Start express server and server livereload to clients
function startServer(){

	var port = config.server.port;

	var server = app.listen(port, function() {
	  console.log('Express server listening on port ' + server.address().port);
	});	
}

var path = {
	jade: {
		src: [
				'./client/views/**/*.jade',
				'./client/*.jade'
			],
		dest: './public'
	},
	stylus: {
		src: [
				'./client/views/**/*.styl',
				'./client/styles/**/*.styl'
			],
		dest: './public/styles',
		file: 'main.css'
	},
	js: {
		src: './client/views/**/*.js',
		dest: './public/javascript'
	},
	libs: {
		src: [
				'./bower_components/jquery/dist/jquery.js'
			],
		dest: './public/javascript'
	},
	images: {
		src: './client/images/*.jpg',
		dest: './public/images'
	}
};

gulp.task('stylus', function(){
	gulp.src(path.stylus.src)
	.pipe(stylus())
	.pipe(concat(path.stylus.file))
	.pipe(gulp.dest(path.stylus.dest))
	.pipe(livereload());
});

gulp.task('jade', function(){
	gulp.src(path.jade.src)
	.pipe(jade({ pretty:true }))
	.pipe(gulp.dest(path.jade.dest))
	.pipe(livereload());
})

gulp.task('js', function(){
	gulp.src(path.js.src)
	.pipe(gulp.dest(path.js.dest))
	.pipe(livereload());
});

gulp.task('watch', function(){
	// Monitor markup
	gulp.watch(path.jade.src, function(){
		gulp.start('jade');
	});

	// Monitor styles
	gulp.watch(path.stylus.src, function(){
		gulp.start('stylus');
	});

	// Monitor javascript
	gulp.watch(path.js.src, function(){
		gulp.start('js');
	});

});

gulp.task('statics', function(){
	//Copy 3rd party libs
	gulp.src(path.libs.src)
	.pipe(gulp.dest(path.libs.dest));

	// Copy images
	gulp.src(path.images.src)
	.pipe(gulp.dest(path.images.dest));
});

gulp.task('serve', ['statics', 'jade', 'stylus', 'js', 'watch'], function(){
	startServer();
	livereload.listen();
});
