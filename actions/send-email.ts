"use server"

import { Resend } from "resend"
import ContactFormEmail from "@/components/emails/contact-form-email"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
})

export async function sendEmail(prevState: any, formData: FormData) {
    try {
        const rawData = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        }

        const validatedData = contactFormSchema.safeParse(rawData)

        if (!validatedData.success) {
            return {
                success: false,
                message: "Vul alstublieft alle velden correct in.",
                errors: validatedData.error.flatten().fieldErrors,
            }
        }

        const { name, email, message } = validatedData.data

        const { data, error } = await resend.emails.send({
            from: "ES Systems Contact <info@essystems.be>",
            to: ["info@essystems.be"],
            subject: `Nieuw bericht van ${name}`,
            react: ContactFormEmail({ name, email, message }),
            replyTo: email,
        })

        if (error) {
            console.error("Resend error:", error)
            return {
                success: false,
                message: "Er is iets misgegaan bij het versturen. Probeer het later opnieuw.",
            }
        }

        return {
            success: true,
            message: "Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.",
        }
    } catch (err) {
        console.error("Server error:", err)
        return {
            success: false,
            message: "Er is een onverwachte fout opgetreden.",
        }
    }
}
