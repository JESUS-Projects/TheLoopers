import mongoose from "mongoose";
import Clothes from "./clothe";

const Schema = mongoose.Schema;

const orderClotheSchema = new Schema(
  {
    clothes: {
      type: [Clothes],
    },
    subtotal: {
      type: Number,
      required: true,
    },
    promotionCode: {
      type: String,
    },
    total: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.OrdersClothe ||
  mongoose.model("OrdersClothe", orderClotheSchema);
