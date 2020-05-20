const express = require("express");
const Query = require("../models/Query");
const { Router } = express;
const router = Router();

router.get("/posts", (req, res) => {});

router.post("/events", async (req, res) => {
  const { type } = req.body;

  console.log(1);
  try {
    console.log(2);
    if (type === "PostCreated") {
      console.log(3);
      const { _id, title, body } = req.body.post;
      console.log(4);
      const query = new Query({ originalId: _id, title, body });
      console.log(5, query);
      await query.save();
      console.log("Done");
    }
    if (type === "CommentCreated") {
      console.log(3, "c");
      const query = await Query.findOne({ originalId: owner });
      console.log(4, "c", query);
      await query.save();
      console.log(5, "c");
    }
    console.log(6);
    res.status(201).send(query);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
