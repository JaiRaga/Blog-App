const mongoose = require("mongoose");
const db = require("../config/keys").mongoUri;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("Connected to Atlas for Query"))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
