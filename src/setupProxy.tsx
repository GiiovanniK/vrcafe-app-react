import { createProxyMiddleware } from "http-proxy-middleware";

// @ts-ignore
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8100",
      changeOrigin: true,
    })
  );
};