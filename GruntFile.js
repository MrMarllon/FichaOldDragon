//Gruntfile.js
module.exports = (grunt) => {
    grunt.initConfig({
        execute: {
            target: {
                src: ['dbaccess.js']
            }
        },
        watch: {
            scripts: {
                files: ['dbaccess.js'],
                tasks: ['execute'],
            },
        }
    })

    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-execute')
}