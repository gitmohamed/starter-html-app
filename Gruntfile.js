module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
          style:'compressed'
        },
        files: {
          'dist/css/style.css' : 'scss/style.scss'
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'dist/css/style.css':'dist/css/style.css'
        }
      }
    },
    watch: {
      css: {
        files: 'scss/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
}
