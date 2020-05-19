const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.listen(9090, () => console.log("Event Bus on port 9090"));
