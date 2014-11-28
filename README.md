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
 * Isolate source from build product
 * Separate configurations for different environments
 * EditorConfig support

TODO:
 * Test support (karma/jasmine)
 * Heroku deployment

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

#### References
 * [Why I Choose Stylus (And You Should Too) - Tuts+ Web Design Article](http://webdesign.tutsplus.com/articles/why-i-choose-stylus-and-you-should-too--webdesign-18412)
 * [What is your folder-structure preference for a large-scale Node.js project?](http://gist.github.com/lancejpollard/1398757)
 * [node.js - ExpressJS How to structure an application? - Stack Overflow](http://stackoverflow.com/questions/5778245/expressjs-how-to-structure-an-application)
 * [Duplicating a repository](https://help.github.com/articles/duplicating-a-repository/)
