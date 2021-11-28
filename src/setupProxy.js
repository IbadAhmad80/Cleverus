const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://78fd-35-223-90-210.ngrok.io", // API endpoint 1
      changeOrigin: true,

      headers: {
        Connection: "keep-alive",
      },
    })
  );
};
