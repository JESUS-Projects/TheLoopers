import mongoose from "mongoose";

const Schema = mongoose.Schema;

const clotheSchema = new Schema(
  {
    img: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    pattern: {
      type: String,
      required: true,
    },
    fabric: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Clothes", clotheSchema);
