const mongoose = require("mongoose");
const db = require("../config/keys").mongoUri;

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("Connected to Atlas for posts"))
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
