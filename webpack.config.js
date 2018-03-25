module.exports = {
    watch: true,
    target: 'electron-main',
    mode: 'development',

    node: {
        __dirname: false,
        __filename: false
    },

    entry: './view/entry.js',

    output: {
        filename: '[name].js',
        path: __dirname + '/build',
        publicPath: './'
    },
    
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['react'],
                    plugins: ['transform-class-properties']
                }
            }
        ]
    }
}