const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://bb7b-34-140-50-234.ngrok.io", // API endpoint 1
      changeOrigin: true,

      headers: {
        Connection: "keep-alive",
      },
    })
  );
};
