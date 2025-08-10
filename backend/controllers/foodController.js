const Food = require("../models/Food");

// CREATE food
exports.createFood = async (req, res) => {
  try {
    const {
      foodname,
      foodrating,
      foodimage,
      restaurantName,
      restaurantLogo,
      restaurantStatus = "open",
    } = req.body;

    if (!foodname || !restaurantName) {
      return res.status(400).json({ message: "Food name and restaurant name are required" });
    }

    const food = await Food.create({
      foodname,
      foodrating: Number(foodrating) || 0,
      foodimage,
      restaurantName,
      restaurantLogo,
      restaurantStatus,
    });

    res.status(201).json({ message: "Food created successfully", food });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ all foods
exports.getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE food
exports.updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFood = await Food.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedFood) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json({ message: "Food updated successfully", updatedFood });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE food
exports.deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFood = await Food.findByIdAndDelete(id);

    if (!deletedFood) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json({ message: "Food deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
