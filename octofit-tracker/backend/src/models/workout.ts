import mongoose, { Schema, Document } from 'mongoose';

export interface IWorkout extends Document {
  user: mongoose.Types.ObjectId;
  activity: mongoose.Types.ObjectId;
  durationMinutes: number;
  performedAt: Date;
}

const WorkoutSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  activity: { type: Schema.Types.ObjectId, ref: 'Activity', required: true },
  durationMinutes: { type: Number, default: 0 },
  performedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IWorkout>('Workout', WorkoutSchema);
