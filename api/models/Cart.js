const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: [String], required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [ProductSchema],
    quantity: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
