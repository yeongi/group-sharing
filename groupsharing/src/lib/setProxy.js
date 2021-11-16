const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    proxy(
      "../server/server",
      proxy.createProxyMiddleware({
        target: "http://localhost:5000/",
        changeOrigin: true,
      })
    )
  );
};
