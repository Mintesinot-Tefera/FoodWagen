const express = require("express");
const cors = require("cors");
const router = express.Router();
const foodRoutes = require("./routes/foodRoutes");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,              
  })
);
app.use(express.json());

app.use("/api/foods", foodRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

