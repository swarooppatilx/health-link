import { resend } from "@/lib/resend"
import VerificationEmail from "@/components/email/verificationEmail"
import { type ApiResponse } from "@/types/ApiResponse"

export async function sendVerificationEmail(
    email: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email ,
            subject: "Verification Code Health Link",
            react: VerificationEmail({otp: verifyCode})
        })
        return {success: true, message: "verification email sent successfully"}
    } catch (error) {
        console.log("error sending verification email", error)
        return {success: false, message: "failed sending email"}
    }
}