module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: 'jquery.slider.js',
        dest: 'jquery.slider.min.js'
      },
      options: {
        report : 'gzip',
        preserveComments : 'some'
      }
    },

    cssmin: {
      compress: {
        files: {
          'jquery.slider.min.css': ['jquery.slider.css']
        }
      },
      options: {
        report : 'gzip'
      }
    },

    jshint: {
      all: ['jquery.slider.js']
    }
  });

  // Load the plugin that provides the "uglify" task.

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'jshint']);

};