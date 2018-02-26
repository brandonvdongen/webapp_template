module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'dist/index.html': 'src/index.html',     // 'destination': 'source'
                }
            }
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['env']
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ["js/*.js"],
                        dest: 'babel/'
                    }
                ]
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: [
                    {
                        expand: true,
                        cwd: 'babel/',
                        src: ["js/*.js"],
                        dest: 'dist/'
                    }
                ]
            }
        },
        clean: ['babel/']
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('build', [
        'babel',
        'uglify',
        'clean'
    ]);


    grunt.registerTask('default', ['build']);
}
;