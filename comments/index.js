const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const commentRouter = require("./routes/comment");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", commentRouter);

app.listen(9007, () => console.log("Comments on 9007"));
