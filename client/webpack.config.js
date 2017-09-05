var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        index: './scripts/index.js',
    },

    output: {
        path: path.resolve( __dirname, 'build' ),
        filename: './scripts/bundle.js'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
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
            {
                test: /\.(css|sass|scss)$/,
                loader: process.env.NODE_ENV !== 'production' ? 
                // Development
                'style-loader!css-loader?sourceMap!sass-loader?sourceMap' : 
                // Build
                ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                modules: true,
                                importLoaders: true,
                                localIdentName: "[name]__[local]___[hash:base64:5]"
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: function () {
                                    return [
                                        require("autoprefixer")
                                    ];
                                },
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                loader:  ExtractTextPlugin.extract({
                  use: [{
                    loader: 'css-loader',
                    options: { importLoaders: 1 },
                  }],
                }),
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: '/styles/[name].css',
            allChunks: true
        })
    ],
    
    devServer: {
        contentBase: 'src',
        compress: true,
        historyApiFallback: true
    }
}