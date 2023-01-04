const withTM = require("next-transpile-modules")(["atoms"]);

module.exports = withTM({
  reactStrictMode: true,
});
