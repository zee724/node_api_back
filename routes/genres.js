const express = require("express");

const router = express.Router();

router.get("/api/genres", (req, res) => {
  res.send("This is genre page");
});

module.exports = router;
