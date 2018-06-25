const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    output: {
        filename: "scripts/[name].[hash:5].bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/webapp/index.html',
            inject: false
        })
    ],
}
