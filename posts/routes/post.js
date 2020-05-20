const express = require("express");
const axios = require("axios");
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
    await axios.post("http://localhost:9090/events", {
      type: "PostCreated",
      post
    });
    res.status(201).send(post);
  } catch (err) {
    res.status(400).send(err);
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
