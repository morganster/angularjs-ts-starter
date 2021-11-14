module.exports = function (env) {
  const { prod } = env;

  if (prod) return require(`./webpack.prod.js`);

  return require(`./webpack.dev.js`);
};
