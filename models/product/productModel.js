import mongoose, { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    qty_unit: { type: String, required: true },
    qty: { type: Number, required: true, default: 1 },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true, default: 1 },
    numReviews: { type: Number, required: true, default: 1 },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.models.Product || model("Product", productSchema);

export default ProductModel;
