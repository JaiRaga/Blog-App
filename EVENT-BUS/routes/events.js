const express = require("express");
const axios = require("axios");
const { Router } = express;

const router = new Router();

router.post("/events", async (req, res) => {
  const event = req.body;
  try {
    // console.log(event);

    await axios.post("http://localhost:9007/api/events", event);
    await axios.post("http://localhost:9008/api/events", event);
    await axios.post("http://localhost:9009/api/events", event);

    res.send({ status: "OK" });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
