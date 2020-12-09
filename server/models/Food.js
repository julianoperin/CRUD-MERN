const mongoose = require("mongoose");

//! CREATE FOOD SCHEMA
const FoodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  daysSinceIAte: {
    type: Number,
    required: true,
  },
});

const Food = mongoose.model("Food", FoodSchema);

//! EXPORT FOOD
module.exports = Food;
