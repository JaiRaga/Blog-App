const express = require("express");
const Post = require("../models/Post");
const { Router } = express;
const router = new Router();

router.get("/posts", async (req, res) => {
  try {
    const post = await Post.find({});

    if (!post) {
      res.status(404).send([]);
    }

    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/posts", async (req, res) => {
  const { title, body } = req.body;
  const post = new Post({ title, body });

  try {
    await post.save();
    res.status(201).send(post);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
