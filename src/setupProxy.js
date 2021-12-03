const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://fb0d-146-148-20-204.ngrok.io", // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive",
      },
    })
  );
};
