const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors"); //! CORS
//! Import from Models
const FoodModel = require("./models/Food");

//! CORS
app.use(cors());

app.use(express.json());

//! Connect to MongoDB
mongoose.connect(
  "mongodb+srv://julianoperin:Hope2021@crud.utfeg.mongodb.net/food?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

//! POST
app.post("/insert", async (req, res) => {
  const foodName = req.body.foodName;
  const days = req.body.days;

  const food = new FoodModel({ foodName: foodName, daysSinceIAte: days });

  try {
    await food.save();
    console.log("Inserted Data!");
  } catch (error) {
    console.log(error);
  }
});

//! GET
app.get("/read", async (req, res) => {
  FoodModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

//!UPDATE
app.put("/update", async (req, res) => {
  const newFoodName = req.body.newFoodName;
  const id = req.body.id;

  try {
    await FoodModel.findById(id, (err, updatedFood) => {
      updatedFood.foodName = newFoodName;
      updatedFood.save();
      res.send("update");
    });
  } catch (error) {
    console.log(error);
  }
});

//! DELETE

app.listen(3001, () => {
  console.log("Server running on port 3001!");
});
