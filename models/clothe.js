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
      enum: ['XS', 'S', 'M' , 'L' , 'XL' , 'free size']
    },
    color: {
      type: String,
      required: true,
    },
    fabric: {
      type: String,
      require: true,
      enum: ['cotton', 'linen', 'denim' , 'satin' , 'silk' , 'leather' , 'others']

    },
    category: {
      type: String,
      required: true,
      enum: ['top', 'shorts', 'trousers' , 'skirt' , 'dress' , 'outer']
    },
    condition: {
      type: String,
      required: true,
      enum: ['new', 'used like new', 'good condition']
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
  },
  { timestamps: true }
);

export default mongoose.models.Clothes ||
  mongoose.model("Clothes", clotheSchema);
