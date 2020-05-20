const mongoose = require("mongoose");
const { Schema } = mongoose;

const querySchema = new Schema(
  {
    originalId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    comments: [
      {
        body: {
          type: String
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

const Query = mongoose.model("query", querySchema);

module.exports = Query;
