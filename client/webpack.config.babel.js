var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var debug = process.env.NODE_ENV !== "production";

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        index: './scripts/index.js',
    },

    output: {
        path: path.resolve( __dirname, 'build' ),
        filename: 'bundle.js'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {   // Preact
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015'
                    ],
                    plugins: [
                        ['transform-react-jsx', { pragma: 'h' }]
                    ]
                }
            },
            {   // Sass
                test: /\.(sass|scss)$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin('build', {
            root:     path.resolve(__dirname),
            verbose:  true
        }),
        new HtmlWebpackPlugin({
            title: 'Freenote',
            favicon: path.resolve(__dirname, './src/favicon.ico'),
            template: path.resolve(__dirname, './src/index.html'),
            inject: 'body'
        })
    ],
    
    devServer: {
        contentBase: 'src',
        compress: true,
        historyApiFallback: true
    }
}