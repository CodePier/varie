const path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = function notificationsPlugin(context) {
  return new WebpackNotifierPlugin({
    title: context.appName,
    alwaysNotify: true,
    contentImage: path.join(context.root, "app/images/dfw_logo.gif"),
  });
};
