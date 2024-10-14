const express = require("express");
const { Genre } = require("../models/genre");

const router = express.Router();

router.get("/api/genres", async (req, res) => {
  try {
    const genres = await Genre.find();
    res.send(genres);
  } catch (ex) {
    // Log sth on the server
    // 500 and sent
    res.status(500).send("Sth wrong happened");
  }
});

module.exports = router;
