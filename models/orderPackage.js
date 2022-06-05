import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderPackageSchema = new Schema(
  {
    package: {
      type: Number,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    promotionCode: {
      type: String,
    },
    shippgingFee: {
      type: Number,
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

export default mongoose.models.OrdersPackage ||
  mongoose.model("OrdersPackage", orderPackageSchema);
