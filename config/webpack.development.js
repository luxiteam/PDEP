const path = require("path");
const rootPath = path.join(__dirname, '..');
const vueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [rootPath + "/src/webapp/entry-client.js"],
    plugins: [
        new vueSSRClientPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/webapp/index.html',
            inject: false
        })
    ]
};
