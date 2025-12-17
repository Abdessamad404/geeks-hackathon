const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Electronics", "Fashion", "Home Decor", "Collectibles", "Gaming"],
    },
    color: {
      type: String,
      required: true,
      enum: [
        "Black",
        "Brown/Wood",
        "Silver/Chrome",
        "Gold/Brass",
        "Colorful/Multi",
      ],
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      enum: ["Mint", "Good", "Fair"],
    },
    year: {
      type: Number,
      min: 1900,
      max: new Date().getFullYear(),
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Auto-creates createdAt and updatedAt
  }
);

module.exports = mongoose.model("Product", productSchema);
