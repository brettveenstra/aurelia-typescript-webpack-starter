module.exports = (config) => {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: process.cwd(),

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'jasmine',
            'karma-typescript'
        ],

        // list of files / patterns to load in the browser
        files: [
            'test/karma-setup.ts',
            'src/**/*.ts',
            'test/unit/**/*.spec.ts'
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.ts': ['karma-typescript']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: [
            'spec',
            'karma-typescript'
        ],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO ||
        // config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'Chrome'
        ],

        karmaTypescriptConfig: {
            compilerOptions: {
                lib: [
                    'es6',
                    'dom'
                ]
            },
            coverageOptions: {
                exclude: [
                    /\.(d|spec|test)\.ts$/i,
                    /setup\.ts$/i
                ]
            }
        }
    });
};