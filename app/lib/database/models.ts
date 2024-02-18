import { Schema, models, model } from "mongoose";

/**
 * User schema
 */
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, default: "user" },
  },
  {
    timestamps: true,
    collection: "vf_users",
  },
);

/**
 * Product schema
 */
const productSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: "vf_products",
  },
);

productSchema.pre("deleteOne", { document: true }, async function (next) {
  await ReviewModel.deleteMany({ product: this._id });
  next();
});

/**
 * Shipping schema
 */
const shippingSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  {
    _id: false,
  },
);

/**
 * Payment schema
 */
const paymentSchema = new Schema(
  {
    paymentMethod: { type: String, required: true },
  },
  {
    _id: false,
  },
);

/**
 * OrderItem schema
 */
const orderItemSchema = new Schema({
  qty: { type: Number, required: true },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

/**
 * Order schema
 */
const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [orderItemSchema],
    shipping: shippingSchema,
    payment: paymentSchema,
    itemsPrice: { type: Number },
    taxPrice: { type: Number },
    shippingPrice: { type: Number },
    totalPrice: { type: Number },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
    collection: "vf_orders",
  },
);

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    rating: { type: Number, default: 1 },
    comment: { type: String, required: true },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "vf_reviews",
  },
);

export const UserModel = models?.User || model("User", userSchema);
export const ProductModel = models?.Product || model("Product", productSchema);
export const OrderModel = models?.Order || model("Order", orderSchema);
export const ReviewModel = models?.Review || model("Review", reviewSchema);
