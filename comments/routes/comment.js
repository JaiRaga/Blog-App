const express = require("express");
const axios = require("axios");
const Comment = require("../models/Comment");
const { Router } = express;
const router = new Router();

router.post("/posts/:id/comments", async (req, res) => {
  const { body } = req.body;
  const comment = new Comment({ body, owner: req.params.id });

  try {
    await comment.save();
    await axios.post("http://localhost:9090/events", {
      type: "CommentCreated",
      comment
    });
    res.status(201).send(comment);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/posts/:id/comments", async (req, res) => {
  try {
    const comments = await Comment.find({ owner: req.params.id });

    if (!comments) {
      res.status(404).send([]);
    }

    res.status(200).send(comments);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/events", (req, res) => {
  const event = req.body;
  try {
    console.log(event.type);
    res.send({});
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
