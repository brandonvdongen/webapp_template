module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'dest/js/core.min.js': ['js/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', [
        'uglify'
    ]);


    grunt.registerTask('default', ['build']);
};