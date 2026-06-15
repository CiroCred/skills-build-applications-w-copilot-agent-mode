/**
 * Seed the octofit_db database with test data
 */
import mongoose from 'mongoose';
import User from '../models/user';
import Team from '../models/team';
import Activity from '../models/activity';
import Leaderboard from '../models/leaderboard';
import Workout from '../models/workout';

const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

async function seed() {
  console.log('Seed the octofit_db database with test data');
  await mongoose.connect(mongoUri);

  // Clear existing data
  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Leaderboard.deleteMany({}),
    Workout.deleteMany({})
  ]);

  // Create users
  const users = await User.create([
    { name: 'Alice Johnson', email: 'alice@example.com' },
    { name: 'Bob Smith', email: 'bob@example.com' },
    { name: 'Cara Diaz', email: 'cara@example.com' }
  ]);

  // Create teams
  const teams = await Team.create([
    { name: 'Team Octo', members: [users[0]._id, users[1]._id] },
    { name: 'Team Fit', members: [users[2]._id] }
  ]);

  // Create activities
  const activities = await Activity.create([
    { name: 'Running', calories: 600 },
    { name: 'Cycling', calories: 500 },
    { name: 'Yoga', calories: 200 }
  ]);

  // Create workouts
  const workouts = await Workout.create([
    { user: users[0]._id, activity: activities[0]._id, durationMinutes: 30 },
    { user: users[1]._id, activity: activities[1]._id, durationMinutes: 45 },
    { user: users[2]._id, activity: activities[2]._id, durationMinutes: 60 }
  ]);

  // Create leaderboard entries
  const leaderboard = await Leaderboard.create([
    { user: users[0]._id, score: 1500 },
    { user: users[1]._id, score: 1200 },
    { user: users[2]._id, score: 900 }
  ]);

  console.log('Seeded:', {
    users: users.length,
    teams: teams.length,
    activities: activities.length,
    workouts: workouts.length,
    leaderboard: leaderboard.length
  });

  // Verify counts
  const ucount = await User.countDocuments();
  const tcount = await Team.countDocuments();
  console.log(`Users: ${ucount}, Teams: ${tcount}`);

  await mongoose.disconnect();
  console.log('Seeding complete');
}

seed().catch((err) => {
  console.error('Seeding error:', err);
  process.exit(1);
});
