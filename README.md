broilerplate
============

A rough boilerplate for quickly starting up a web project. Uses Gulp for building and Node for serving.

#### Features
 * Jade preprocessing
 * Stylus preprocessing
 * Watch/monitor changes and compile
 * Livereload changes to browser
 * Restart server when scripts change
 * Validate JavaScript with JSHint 
 * Isolate source from distribution folder
 * Separate configurations for different environments
 * EditorConfig support
 * Autoprefix css
 * Sourcemaps for minified Javascript and css
 * Exclude livereload and sourcemaps from production build

TODO:
 * Test support (karma/jasmine)
 * Heroku deployment
 * Minify css/javascript in production builds
 * Apply gulp-inject in production builds
 * Replace livereload with Browser-sync(?)

##### Replicate the repository
 * Create github repository "MyRep"
 * git clone --bare https://github.com/tuomashc/broilerplate.git
 * cd broilerplate.git
 * git push --mirror https://github.com/tuomashc/MyRep.git
 * git clone https://github.com/tuomashc/MyRep.git
 * rm -rf broilerplate.git

##### Install packages and start the server
 * npm install
 * bower install
 * gulp serve
 * http://localhost:3000
 * Start pecking! 

##### Gulp tasks
 * gulp serve - fire up a developement environment
 * gulp clean - Clean up previous buidls
 * NODE_ENV=production gulp build - Create production build


#### References
 * [Why I Choose Stylus (And You Should Too) - Tuts+ Web Design Article](http://webdesign.tutsplus.com/articles/why-i-choose-stylus-and-you-should-too--webdesign-18412)
 * [What is your folder-structure preference for a large-scale Node.js project?](http://gist.github.com/lancejpollard/1398757)
 * [node.js - ExpressJS How to structure an application? - Stack Overflow](http://stackoverflow.com/questions/5778245/expressjs-how-to-structure-an-application)
 * [Duplicating a repository](https://help.github.com/articles/duplicating-a-repository/)
 * [sourceMappingURL=data:application/json;base64,..." doesn't work (source map)](https://code.google.com/p/chromium/issues/detail?id=126121)
