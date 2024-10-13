const genres = require("../routes/genres");

module.exports = function (app) {
  app.use(genres);
};
