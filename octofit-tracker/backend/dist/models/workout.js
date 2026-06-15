import mongoose, { Schema } from 'mongoose';
const WorkoutSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    activity: { type: Schema.Types.ObjectId, ref: 'Activity', required: true },
    durationMinutes: { type: Number, default: 0 },
    performedAt: { type: Date, default: Date.now }
});
export default mongoose.model('Workout', WorkoutSchema);
