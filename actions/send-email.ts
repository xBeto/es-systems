"use server"

import { Resend } from "resend"
import ContactFormEmail from "@/components/emails/contact-form-email"
import { z } from "zod"
import { checkBotId } from 'botid/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    regio: z.string().min(1, "Regio is required"),
    btwNumber: z.string().optional(),
    message: z.string().min(1, "Message is required"),
    fax: z.string().optional(), // Honeypot field
})

export async function sendEmail(prevState: any, formData: FormData) {
    try {
        const verification = await checkBotId()

        if (verification.isBot) {
            return {
                success: false,
                message: "Toegang geweigerd: Bot gedetecteerd.",
            }
        }

        const rawData = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            regio: formData.get("regio"),
            btwNumber: formData.get("btwNumber"),
            message: formData.get("message"),
            fax: formData.get("fax"),
        }

        const validatedData = contactFormSchema.safeParse(rawData)

        if (!validatedData.success) {
            return {
                success: false,
                message: "Vul alstublieft alle velden correct in.",
                errors: validatedData.error.flatten().fieldErrors,
            }
        }

        const { name, email, phone, regio, btwNumber, message, fax } = validatedData.data

        // Honeypot check: if the 'fax' field is filled, it's a bot.
        // We pretend the submission was successful to not alert the bot.
        if (fax) {
            console.warn(`Honeypot triggered by ${email}`)
            return {
                success: true,
                message: "Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.",
            }
        }

        const { data, error } = await resend.emails.send({
            from: "ES Systems Contact <info@essystems.be>",
            to: ["offerte@essystems.be"],
            subject: `Nieuw bericht van ${name}`,
            react: ContactFormEmail({ name, email, phone, regio, btwNumber, message }),
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
