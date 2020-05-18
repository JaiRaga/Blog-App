const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const postRouter = require("./routes/post");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", postRouter);

app.listen(9008, () => console.log("Posts on 9008"));
