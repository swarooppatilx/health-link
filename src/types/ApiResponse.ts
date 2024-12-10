import { type Appointment } from "@/models/User";

export interface ApiResponse{
    success: boolean,
    message: string,
    appointments? : Appointment[]
}