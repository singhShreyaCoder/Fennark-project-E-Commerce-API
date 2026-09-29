import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Category: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Stock: {
      type: Number,
      required: true,
    },
    Image: {
      type: String,
    },
  },
  { timestamps: true },
);

const product = mongoose.model("product", productSchema);

export default product;
