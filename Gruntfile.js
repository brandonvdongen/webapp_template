module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'live/js/core.min.js': ['js/*.js']
                }
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['env']
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ["js/*.js"],
                        dest: 'dist/'
                    }
                ]
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', [
        'babel',
        'uglify'
    ]);


    grunt.registerTask('default', ['build']);
}
;