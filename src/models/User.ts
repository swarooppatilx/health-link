import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const User = models.User || model('User', UserSchema);
