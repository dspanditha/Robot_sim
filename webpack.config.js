module.exports = {
    entry  : './assets/js/index.js',
    output : {
        path     : __dirname + "/dist",
        filename : 'compiled.dist.js'
    },
    module : {
        loaders: [ { 
                test   : /.js$/,
                loader : 'babel-loader',
                exclude: /(\/node_modules\/|test\.js)/,
                query: {
                    presets: [
                        'es2015',
                        'stage-2'
                    ]
                }
            }
        ]
    }
};