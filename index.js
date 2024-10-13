const logger = require("./startup/logging");
const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello  World");
});

require("./startup/routes")(app);

const port = 3000;

app.listen(port, () => logger.info(`Listening on port ${port}...`));
