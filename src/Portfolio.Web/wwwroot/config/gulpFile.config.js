'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        //Got tired of scrolling through all the comments so removed them
        //Don't hurt me AC :-)
        this.path = {
            dest: {
                root: './dist/',
                css: './dist/contents/css'  
            },
            src: {
                // Order is quite important here for the HTML tag injection.s
                root:'./src/'               
            }
        };           

        this.tsOutputPath = this.path.dest.root;
        this.tsGenPath = this.path.src.root;
        this.allJavaScript = [this.path.dest.root + '/js/**/*.js'];
        this.allTypeScript = this.path.src.root + '/**/*.ts';
        this.allTemplate =  [this.path.src.root + '/**/*.html'];

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/main/**/*.ts';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;