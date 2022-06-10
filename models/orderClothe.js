import mongoose from "mongoose";
import Clothes from "./clothe";

const Schema = mongoose.Schema;

const orderClotheSchema = new Schema(
  {
    clothes: {
      type: [Clothes],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.OrdersClothe ||
  mongoose.model("OrdersClothe", orderClotheSchema);
