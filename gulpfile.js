
var gulp      = require('gulp'),
  stylus      = require('gulp-stylus'),
  jade        = require('gulp-jade'),
  concat      = require('gulp-concat'),
  watch       = require('gulp-watch'),
  livereload  = require('gulp-livereload'),
  autoprefix  = require('gulp-autoprefixer'),
  jshint      = require('gulp-jshint'),
  nodemon     = require('gulp-nodemon'),
  uglify      = require('gulp-uglify'),
  sourcemaps  = require('gulp-sourcemaps'),
  gulpif      = require('gulp-if'),
  inject      = require('gulp-inject'),
  del         = require('del'),
  stylish     = require('jshint-stylish'),  // reporter for stylish
  path        = require('path'),
  common      = require('./common'),
  app         = require('./server');


var LIVERELOAD_PORT = 35729;
var config = common.config();

// Start express server and server livereload to clients
function startServer(){
  nodemon({ script: 'app.js'})
    .on('restart', function(){
      console.log('Server restarted');
    });
}

var path = {
  jade: {
    src: [
        './app/views/**/*.jade',
        './app/*.jade'
      ],
    dest: './dist'
  },
  stylus: {
    src: [
        './app/views/**/*.styl',
        './app/styles/**/*.styl'
      ],
    dest: './dist/styles',
    file: 'main.css'
  },
  js: {
    src: [
        './app/views/**/*.js',
        './app/javascripts/*.js'
      ],
    dest: './dist/javascripts',
    file: 'main.js'
  },
  nodeJs: {
    src: [
        './*.js',
        './models/**/*.js'
      ]
  },
  libs: {
    src: [
        './bower_components/jquery/dist/jquery.js'
      ],
    dest: './dist/javascripts'
  },
  images: {
    src: './app/images/*.jpg',
    dest: './dist/images'
  }
};

// Compile stylus and pipe to livereload
gulp.task('stylus', function(){
  gulp.src(path.stylus.src)
  .pipe(stylus())
  .pipe(gulpif(config.development, sourcemaps.init()))
  .pipe(concat(path.stylus.file))
  .pipe(autoprefix())
  .pipe(gulpif(config.development, sourcemaps.write()))
  .pipe(gulp.dest(path.stylus.dest))
  .pipe(gulpif(config.development, livereload()));
});

// Compile jade and pipe to livereload
gulp.task('jade', function(){
  gulp.src(path.jade.src)
  .pipe(jade({ pretty: true }))
  .pipe(gulp.dest(path.jade.dest))
  .pipe(gulpif(config.development, livereload()));
});

// Compile javascripts and pipe to livereload
gulp.task('js', function(){
  gulp.src(path.js.src)
  .pipe(gulpif(config.development, sourcemaps.init()))  // Init sourcemaps
  .pipe(concat(path.js.file))                           // The order of concat and uglify matters for sourcemaps. This works..
  .pipe(uglify())                                       // Uglify - minify/optimize ...
  .pipe(gulpif(config.development, sourcemaps.write())) // Write sourcemap to the uglified file
  .pipe(gulp.dest(path.js.dest))
  .pipe(jshint())
  .pipe(jshint.reporter(stylish))
  .pipe(gulpif(config.development, livereload()));
});

gulp.task('inject', function(){
  gulp.src('./dist/index.html', { read: false })
  .pipe(inject(gulp.src('./dist/javascripts/main.js')));
});

gulp.task('watch', function(){

  gulp.watch(path.jade.src, ['jade']);
  gulp.watch(path.stylus.src, ['stylus']);
  gulp.watch(path.js.src, ['js']);

  // Monitor node scripts
  gulp.watch(path.nodeJs.src, function(file){
    gulp.src(file.path)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
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

// Clean distribution folder
gulp.task('clean', del.bind(null, ['dist']));

// Development mode
gulp.task('serve', ['statics', 'jade', 'stylus', 'js', 'watch'], function(){
  startServer();
  livereload.listen();
});

// Build a production 'package'
gulp.task('build', ['clean'], function(){
  gulp.start('statics', 'jade', 'stylus', 'js');
});


