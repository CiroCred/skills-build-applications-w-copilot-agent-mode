import { Router } from 'express';
import Activity from '../models/activity';

const router = Router();

// GET /api/activities/ - list activities
router.get('/', async (req, res) => {
  const activities = await Activity.find().lean();
  res.json(activities);
});

// POST /api/activities/ - create activity
router.post('/', async (req, res) => {
  const { name, calories } = req.body;
  const activity = new Activity({ name, calories });
  await activity.save();
  res.status(201).json(activity);
});

export default router;
