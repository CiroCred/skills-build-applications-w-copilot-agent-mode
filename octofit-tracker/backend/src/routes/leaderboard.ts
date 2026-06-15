import { Router } from 'express';
import Leaderboard from '../models/leaderboard.js';

const router = Router();

// GET /api/leaderboard/ - list leaderboard entries
router.get('/', async (req, res) => {
  const entries = await Leaderboard.find().populate('user').lean();
  res.json(entries);
});

// POST /api/leaderboard/ - add leaderboard entry
router.post('/', async (req, res) => {
  const { user, score } = req.body;
  const entry = new Leaderboard({ user, score });
  await entry.save();
  res.status(201).json(entry);
});

export default router;
