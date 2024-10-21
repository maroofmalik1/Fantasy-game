import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Player", PlayerSchema);
