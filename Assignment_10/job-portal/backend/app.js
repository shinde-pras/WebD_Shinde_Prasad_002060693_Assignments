require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/userRoutes");
const imageRoutes = require("./routes/imageRoutes");
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use("/images", express.static("uploads"));
app.use("/api/user", routes);

//cors
app.use(cors({ origin: "http://localhost:5173",
  credentials: true
}));

//Routes
app.use("/api/user", routes);
app.use("/api/user", imageRoutes);

// MongoDB connection
const mongoURI = process.env.MONGODB_URI;
console.log("MONGO URI:", mongoURI); 

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;
database.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}.`);
});
