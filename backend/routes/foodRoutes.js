const express = require("express");
const router = express.Router();
const {
  createFood,
  getFoods,
  updateFood,
  deleteFood
} = require("../controllers/foodController");


router.post("/", createFood);         
router.post("/", createFood);         
router.get("/", getFoods);            
router.put("/:id", updateFood);     
router.delete("/:id", deleteFood);   

module.exports = router;
