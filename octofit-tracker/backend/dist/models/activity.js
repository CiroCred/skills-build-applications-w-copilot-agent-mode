import mongoose, { Schema } from 'mongoose';
const ActivitySchema = new Schema({
    name: { type: String, required: true },
    calories: { type: Number, default: 0 }
});
export default mongoose.model('Activity', ActivitySchema);
