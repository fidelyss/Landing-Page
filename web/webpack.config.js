const path = require('path')
const { fileURLToPath } = require('url')
module.exports = {
    mode: 'development',
    entry: './src/main.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'assets', 'Bundles')
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /(\.js$)|(\.jsx)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/, // regex para arquivos .css
                use: ['style-loader', 'css-loader'], // loaders a serem usados
            },
        ]
    },
    devtool: 'source-map'
}