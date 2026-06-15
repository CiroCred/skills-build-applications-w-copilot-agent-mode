import { Router } from 'express';
import Workout from '../models/workout.js';

const router = Router();

// GET /api/workouts/ - list workouts
router.get('/', async (req, res) => {
  const workouts = await Workout.find().populate('user activity').lean();
  res.json(workouts);
});

// POST /api/workouts/ - create workout
router.post('/', async (req, res) => {
  const { user, activity, durationMinutes, performedAt } = req.body;
  const workout = new Workout({ user, activity, durationMinutes, performedAt });
  await workout.save();
  res.status(201).json(workout);
});

export default router;
