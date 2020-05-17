const express = require("express");
require("./db/mongoose");
const app = express();

app.listen(9007, () => console.log("Comments on 9008"));
