require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/userRoutes");
const imageRoutes = require("./routes/imageRoutes");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

// ✅ CORS & JSON Middleware should come FIRST
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // 👈 parses JSON bodies

// ✅ Static file middleware
app.use("/images", express.static("uploads"));

// ✅ Route mounting AFTER middleware
app.use("/api/user", routes);
app.use("/api/user", imageRoutes);
app.use("/api", jobRoutes); // 👈 important this is after express.json()

// ✅ MongoDB Connection
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

// ✅ Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}.`);
});