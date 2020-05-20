const express = require("express");
const cors = require("cors");
const eventRouter = require("./routes/events");

const app = express();

app.use(express.json());
app.use(cors());
app.use(eventRouter);

app.listen(9090, () => console.log("Event Bus on port 9090"));
