const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const queryRouter = require("./routes/query");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", queryRouter);

app.listen(9009, () => console.log("Query on port 9009"));
