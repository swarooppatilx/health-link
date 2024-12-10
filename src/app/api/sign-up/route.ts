import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import bcrypt from 'bcrypt';
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: Request){
    await dbConnect()
    try {
        const { email, password } = await request.json()
        const existingUserVerified = await UserModel.findOne({
            email,
            isVefied: true 
        })

        if(existingUserVerified){
            return Response.json({
                success: false,
                message: "email already registered"
            },{
                status: 400
            })
        }
    } catch (error) {
        console.log("error registering user", error)
        return Response.json({
            success: false,
            message: "error registering user",
        },
            {
                status: 500
            }
        )
    }
}