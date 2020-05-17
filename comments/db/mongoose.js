const mongoose = require("mongoose");
const db = require("../config/keys").mongoUri;

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("Connected to Atlas for comments"))
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
