const path = require('path');

module.exports = {
    entry: './src/index',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/app.js'
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
    },

    devtool: 'cheap-eval-source-map' // remove for build
};