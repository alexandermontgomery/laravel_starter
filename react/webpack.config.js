var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin(
    {
        filename: 'assets_map.json',
        path: '../public/'
    }
);

module.exports = {
    entry: {
        front: './src/front/front.js',
        main: './src/main/main.js'
    },
    output: {
        path: '../assets/',
        filename: '[name].[hash].js'
    },
    module : {
        loaders : [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "jsx-loader?harmony"
            }
        ]
    },
    plugins: [
        assetsPluginInstance
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}