const express = require("express");
const Comment = require("../models/Comment");
const { Router } = express;
const router = new Router();

router.post("/posts/:id/comments", async (req, res) => {
  const { body } = req.body;
  const comment = new Comment({ body, owner: req.params.id });

  try {
    await comment.save();
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

module.exports = router;
