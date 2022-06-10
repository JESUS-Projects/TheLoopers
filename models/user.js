import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    model: {
      hair: {
        color: String,
        img: String,
      },
      skin: {
        color: String,
        img: String,
      },
      eye: {
        color: String,
        img: String,
      },
    },
    point: {
      type: Number,
      required: true,
    },
    address: {
      addressLine: {
        type: String,
      },
      district: {
        type: String,
      },
      province: {
        type: String,
      },
      postcode: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Users || mongoose.model("Users", userSchema);
