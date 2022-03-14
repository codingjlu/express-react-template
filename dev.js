const webpack = require("webpack");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("./client/webpack.config");
config.mode = "development";

const compiler = webpack(config);

exports.comp = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
});
exports.hot = webpackHotMiddleware(compiler);
