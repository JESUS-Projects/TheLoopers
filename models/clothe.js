import mongoose from "mongoose";

const Schema = mongoose.Schema;

const clotheSchema = new Schema(
  {
    img: {
      type: String,
      required: true,
    },
    size: {
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
    condition: {
      type: String,
      required: true,
    },
    flaw: {
      type: Boolean,
      required: true,
    },
    flaw_detail: {
      type: String,
    },
    brand: {
      type: String,
      required: true,
    },
    original_price: {
      type: Number,
      required: true,
    },
    point: {
      type: Number,
      requred: true,
    },
    owner: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.models.Clothes ||
  mongoose.model("Clothes", clotheSchema);
