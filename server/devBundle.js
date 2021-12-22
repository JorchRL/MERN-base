import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import WebpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "./../webpack.config.client";

// When in development mode, we want webpack to bundle our
// client code to /dist/bundle.js to be served over a REST endpoint.

const compile = (app) => {
  if (process.env.NODE_ENV === "development") {
    const compiler = webpack(webpackConfig);
    const middleware = webpackMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    });

    app.use(middleware);
    app.use(WebpackHotMiddleware(compiler));
  }
};

export default compile;
