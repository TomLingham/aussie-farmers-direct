var autoprefixer = require('autoprefixer');

module.exports = {
    context: __dirname,
    entry: "./js/app.js",
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: "bundles.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: "/node_modules/",
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },
    postcss: function () {
        return [ autoprefixer ];
    }
};