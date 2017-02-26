/**
 * Configure copying tasks into dist version
 */
module.exports = {
    dist: {
        files: [
            {
                expand: true,
                cwd: 'public',
                src: [
                    'index.html',
                    'polymer-loader.vulcanized.html',
                    'images/*',
                    'views/*',
                    'bower_components/webcomponentsjs/webcomponents-lite.js',
					'bower_components/es6-promise/es6-promise.min.js',
					'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/px/dist/px.min.js',                 
                    'bower_components/requirejs/require.js',
					'bower_components/angular/angular.min.js',
					'bower_components/angular-mocks/angular-mocks.js',
					'bower_components/angular-resource/angular-resource.min.js',
					'bower_components/angular-route/angular-route.min.js',
					'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                    'bower_components/font-awesome/fonts/*',
                    'bower_components/px-typography-design/type/*'
                ],
                dest: 'dist/www/'
            }
        ]
    },
    serve: {
        files: [
            {
                expand: true,
                cwd: 'public',
                src: ['polymer-loader.html'],
                rename: function (src, dest) {
                    return 'public/polymer-loader.vulcanized.html';
                }
            }
        ]
    }
};
