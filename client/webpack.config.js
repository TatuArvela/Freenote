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
            {   // Preact
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
            {   // Sass
                test: /\.(css|sass|scss)$/,
                loader: process.env.NODE_ENV !== 'production' ?             // Check environment
                'style-loader!css-loader?sourceMap!sass-loader?sourceMap' :     // Development
                ExtractTextPlugin.extract({                                     // Production
                    fallback: "style-loader",
                    use: [
                        {
                            use: "css-loader",
                            options: {
                                sourceMap: true,
                                modules: true,
                                importLoaders: true,
                                localIdentName: "[name]__[local]___[hash:base64:5]"
                            }
                        },
                        {
                            use: "postcss-loader",
                            options: {
                                sourceMap: true,
                                plugins: function () {
                                    return [
                                        require("autoprefixer")
                                    ];
                                }
                            }
                        },
                        {
                            use: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },

    plugins: [
        // Output parsed CSS files
        new ExtractTextPlugin({
            filename: './styles/[name].css',
            allChunks: true
        })
    ],
    
    devServer: {
        contentBase: 'src',
        compress: true,
        historyApiFallback: true
    }
}