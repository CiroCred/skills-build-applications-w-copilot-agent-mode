import mongoose, { Schema, Document } from 'mongoose';

export interface IActivity extends Document {
  name: string;
  calories: number;
}

const ActivitySchema: Schema = new Schema({
  name: { type: String, required: true },
  calories: { type: Number, default: 0 }
});

export default mongoose.model<IActivity>('Activity', ActivitySchema);
