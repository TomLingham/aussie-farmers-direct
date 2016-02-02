var autoprefixer = require('autoprefixer');

module.exports = {
    context: __dirname,
    entry: "./resources/assets/js/app.js",
    devtool: 'source-map',
    output: {
        path: __dirname + "/public/js",
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