const express = require("express");
require("./db/mongoose");
const app = express();

app.listen(9008, () => console.log("Posts on 9008"));
