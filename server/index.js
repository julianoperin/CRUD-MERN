const express = require("express");
const app = express();
const mongoose = require("mongoose");
//! Import from Models
const FoodModel = require("./models/Food");

app.use(express.json());

//! Connect to MongoDB
mongoose.connect(
  "mongodb+srv://julianoperin:Hope2021@crud.utfeg.mongodb.net/food?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
  const food = new FoodModel({ foodName: "Apple", daysSinceIAte: 3 });

  try {
    await food.save();
    console.log("Inserted Data!");
  } catch (error) {
    console.log(error);
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001!");
});
