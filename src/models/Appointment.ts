import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema(
  {
    hospitalId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    symptoms: {
      type: String,
      required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    painSeverity: {
        type: String,
        required: true,
    },
    underlyingConditions: {
        type: String,
        required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically create `createdAt` and `updatedAt` fields
  }
);

const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);

export { Appointment };
