import {mongoose, Schema, Document} from "mongoose";
import { boolean, date, number, string } from "zod";

export interface Appointment extends Document {
    patientID: string,
    hospitalID: string,
    isActive: boolean,
    estimatedTime: number,
    createdAt: Date,
}

const AppointmentSchema: Schema<Appointment> = new Schema({
    patientID: {
        type: string,
        required: true
    },
    hospitalID: {
        type: string,
        required: true
    },
    isActive: {
        type: boolean,
        required: true,
        default: true
    },
    estimatedTime: {
        type: number,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

export interface User extends Document {
    userID: string,
    email: string,
    password: string,
    isVerified: boolean,
    verifyCode: string,
    verifyCodeExpiry: Date,
    appointment: Appointment[],
    createdAt: Date
}

const UserSchema: Schema<User> = new Schema({
    userID: {
        type: string,
        required: [true, "userID is required"],
        unique: true
    },
    email: {
        type: string,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: string,
        required: true
    },
    isVerified: {
        type: boolean,
        required: true,
        default: false
    },
    verifyCode: {
        type: string,
    },
    verifyCodeExpiry: {
        type: Date
    },
    appointment: [AppointmentSchema],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModel