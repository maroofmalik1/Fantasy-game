import { Router } from "express";
const router = Router();
import Team, { findById } from "../models/Team";
import { findById as _findById } from "../models/Player";

// Create a new team
router.post("/", async (req, res) => {
  const { name, players } = req.body;

  if (players.length > 11) {
    return res.status(400).json({ message: "A team can only have 11 players" });
  }

  let totalPoints = 0;
  for (let playerId of players) {
    const player = await _findById(playerId);
    totalPoints += player.points;
  }

  const newTeam = new Team({
    name,
    players,
    totalPoints,
  });

  await newTeam.save();
  res.status(201).json(newTeam);
});

// Get a team by ID
router.get("/:id", async (req, res) => {
  const team = await findById(req.params.id).populate("players");
  if (!team) {
    return res.status(404).json({ message: "Team not found" });
  }
  res.json(team);
});

export default router;
