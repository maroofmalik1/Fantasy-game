import { Router } from "express";
const router = Router();
import Player, { find } from "../models/Player";

// Create a new player
router.post("/", async (req, res) => {
  try {
    const { name, role, points } = req.body;
    const newPlayer = new Player({ name, role, points });
    await newPlayer.save();
    res.status(201).json(newPlayer);
  } catch (err) {
    res.status(500).json({ error: "Failed to add player" });
  }
});

// Get all players
router.get("/", async (req, res) => {
  try {
    const players = await find();
    res.json(players);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch players" });
  }
});

export default router;
