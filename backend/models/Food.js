const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    foodname: { type: String, required: true, trim: true },
    foodrating: { type: Number, min: 0, max: 5, default: 0 },
    foodimage: { type: String, trim: true },
    restaurantName: { type: String, required: true, trim: true },
    restaurantLogo: { type: String, trim: true },
    restaurantStatus: {
      type: String,
      enum: ["open", "close"],
      default: "open",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", foodSchema);
