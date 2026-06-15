import { Router } from 'express';
import Team from '../models/team';

const router = Router();

// GET /api/teams/ - list teams
router.get('/', async (req, res) => {
  const teams = await Team.find().populate('members').lean();
  res.json(teams);
});

// POST /api/teams/ - create team
router.post('/', async (req, res) => {
  const { name, members } = req.body;
  const team = new Team({ name, members });
  await team.save();
  res.status(201).json(team);
});

export default router;
