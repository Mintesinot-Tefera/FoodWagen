// require("dotenv").config();
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
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/user", require("./routes/userRoutes"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

