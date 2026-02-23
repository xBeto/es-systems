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
    'g-recaptcha-response': z.string().min(1, "Bevestig alstublieft dat u geen robot bent."),
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            name: formData.get("name")?.toString() || "",
            email: formData.get("email")?.toString() || "",
            phone: formData.get("phone")?.toString() || "",
            regio: formData.get("regio")?.toString() || "",
            btwNumber: formData.get("btwNumber")?.toString() || "",
            message: formData.get("message")?.toString() || "",
            fax: formData.get("fax")?.toString() || "",
            "g-recaptcha-response": formData.get("g-recaptcha-response")?.toString() || "",
        }

        const inputsForState = {
            name: rawData.name,
            email: rawData.email,
            phone: rawData.phone,
            regio: rawData.regio,
            btwNumber: rawData.btwNumber,
            message: rawData.message,
        }

        const validatedData = contactFormSchema.safeParse(rawData)

        if (!validatedData.success) {
            return {
                success: false,
                message: "Vul alstublieft alle velden correct in.",
                errors: validatedData.error.flatten().fieldErrors,
                inputs: inputsForState,
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

        const recaptchaToken = validatedData.data['g-recaptcha-response'];
        const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

        if (!recaptchaSecret) {
            console.error("RECAPTCHA_SECRET_KEY is missing from environment variables.");
            return {
                success: false,
                message: "Serverconfiguratiefout: reCAPTCHA is niet correct ingesteld.",
                inputs: inputsForState,
            }
        }

        // Verify the token with Google
        const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
        });

        const recaptchaData = await verifyRes.json();

        if (!recaptchaData.success) {
            console.warn("reCAPTCHA validation failed", recaptchaData);
            return {
                success: false,
                message: "reCAPTCHA validatie mislukt. Probeer het opnieuw.",
                inputs: inputsForState,
            }
        }

        const { error } = await resend.emails.send({
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
                inputs: inputsForState,
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
