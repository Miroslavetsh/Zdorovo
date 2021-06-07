const path = require("path")
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const {
    EnvironmentPlugin
} = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV


const jsLoaders = () => {
    let loaders = [{
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    }]

    if (NODE_ENV === 'development') loaders.push('eslint-loader')

    return loaders
}

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: ['@babel/polyfill', './index.ts'],
    output: {
        filename: 'index.[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.ts', '.css', '.scss', '.less'],
        alias: {
            '@styles': path.resolve(__dirname, 'src/assets/styles'),
            '@components': path.resolve(__dirname, 'src/components'),
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port: 3001,
        open: true,
        hot: true
    },
    devtool: NODE_ENV === 'development' ? 'inline-source-map' : false,
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Zdorovo | GiftBox',
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new EnvironmentPlugin('NODE_ENV'),
        new CopyWebpackPlugin({
            patterns: [{
                    from: path.resolve(__dirname, 'src/assets/img/large-box/large-box-bottom.png'),
                    to: path.resolve(__dirname, 'dist/img/large-box'),
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/large-box/large-box-cover.png'),
                    to: path.resolve(__dirname, 'dist/img/large-box'),
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/large-box/large-box.png'),
                    to: path.resolve(__dirname, 'dist/img/large-box'),
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/small-box/small-box-bottom.png'),
                    to: path.resolve(__dirname, 'dist/img/small-box'),
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/small-box/small-box-cover.png'),
                    to: path.resolve(__dirname, 'dist/img/small-box'),
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/small-box/small-box.png'),
                    to: path.resolve(__dirname, 'dist/img/small-box'),
                },
                {
                    from: path.resolve(__dirname, 'src/assets/img/product/product.png'),
                    to: path.resolve(__dirname, 'dist/img/product'),
                }
            ]
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders(),
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{
                        loader: "babel-loader",
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-typescript'
                            ]
                        },
                    },
                    'eslint-loader'
                ]
            }
        ]
    }
};