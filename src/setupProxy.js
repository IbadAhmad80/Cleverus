const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://77be-35-202-24-174.ngrok.io", // API endpoint 1
      changeOrigin: true,

      headers: {
        Connection: "keep-alive",
      },
    })
  );
};
