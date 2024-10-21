import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
  totalPoints: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Team", TeamSchema);
