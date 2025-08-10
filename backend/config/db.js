// backend/config/db.js
const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://admin:<admin>@cluster0.lumwz34.mongodb.net/';


const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
