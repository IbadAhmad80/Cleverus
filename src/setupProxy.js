const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://e9b9-34-80-224-3.ngrok.io", // API endpoint 1
      changeOrigin: true,

      headers: {
        Connection: "keep-alive",
      },
    })
  );
};
