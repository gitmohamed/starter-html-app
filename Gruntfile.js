module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
          style:'compressed'
        },
        files: {
          'dist/css/style.min.css' : 'scss/main.scss'
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'dist/css/style.min.css':'dist/css/style.min.css'
        }
      }
    },
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'server.js','dist/*.js', 'test/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
          // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['./scripts/*.js']
        }
      }
    },
    watch: {
      css: {
        files: ['scripts/*.js', 'scss/*.scss'],
        tasks: ['sass', 'autoprefixer', 'uglify', 'jshint']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
};
