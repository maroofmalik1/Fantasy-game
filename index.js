import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/fantasyGame", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
// Routes
const playerRoutes = require("./routes/players").default;
const teamRoutes = require("./routes/teams");
app.use("/players", playerRoutes);
app.use("/teams", teamRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
