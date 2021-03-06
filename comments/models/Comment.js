const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    body: {
      type: String,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
