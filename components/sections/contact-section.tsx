"use client"

import { useActionState, useEffect } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { sendEmail } from "@/actions/send-email"
import ReCAPTCHA from "react-google-recaptcha"

interface ActionState {
    success: boolean
    message: string
    errors?: {
        [key: string]: string[]
    }
    inputs?: {
        name: string
        email: string
        phone: string
        regio: string
        btwNumber: string
        message: string
    }
}

const initialState: ActionState = {
    success: false,
    message: "",
}

export function ContactSection() {
    const [state, formAction, isPending] = useActionState(sendEmail, initialState)

    // Reset form after successful submission
    useEffect(() => {
        if (state.success) {
            const form = document.getElementById("contact-form") as HTMLFormElement
            form?.reset()
        }
    }, [state.success])

    return (
        <section id="contact" className="py-32 bg-[#F5F5F7] text-foreground border-t border-black/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                    {/* Left: Heading */}
                    <div>
                        <FadeIn delay={0.1}>
                            <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground block mb-6">
                                Contact
                            </span>
                            <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-[1]">
                                Start een <br /> Project
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
                                Heeft u een visie voor uw buitenruimte? Laat het ons weten. Wij vertalen uw ideeën naar aluminium realiteit.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Right: Minimal Form */}
                    <div>
                        <form id="contact-form" action={formAction} className="space-y-12">

                            {/* Status Messages */}
                            {state?.message && (
                                <div className={`p-4 rounded-lg flex items-center gap-3 ${state.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {state.success && <CheckCircle2 className="w-5 h-5 flex-shrink-0" />}
                                    <p>{state.message}</p>
                                </div>
                            )}

                            {/* Honeypot Input (hidden from real users) */}
                            <div className="absolute opacity-0 -z-50 h-0 w-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
                                <label htmlFor="fax">Fax</label>
                                <input
                                    type="text"
                                    id="fax"
                                    name="fax"
                                    autoComplete="off"
                                    tabIndex={-1}
                                />
                            </div>

                            {/* Name Input */}
                            <div className="group">
                                <label htmlFor="name" className="block text-sm font-medium mb-2 opacity-60 group-focus-within:opacity-100 transition-opacity">
                                    Uw Naam <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    defaultValue={state?.inputs?.name || ""}
                                    className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-light focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20"
                                    placeholder="John Doe"
                                />
                                {state?.errors?.name && (
                                    <p className="text-red-500 text-sm mt-2">{state.errors.name[0]}</p>
                                )}
                            </div>

                            {/* Email Input */}
                            <div className="group">
                                <label htmlFor="email" className="block text-sm font-medium mb-2 opacity-60 group-focus-within:opacity-100 transition-opacity">
                                    Email Adres <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    defaultValue={state?.inputs?.email || ""}
                                    className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-light focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20"
                                    placeholder="john@example.com"
                                />
                                {state?.errors?.email && (
                                    <p className="text-red-500 text-sm mt-2">{state.errors.email[0]}</p>
                                )}
                            </div>

                            {/* Phone Number Input */}
                            <div className="group">
                                <label htmlFor="phone" className="block text-sm font-medium mb-2 opacity-60 group-focus-within:opacity-100 transition-opacity">
                                    Telefoonnummer <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    defaultValue={state?.inputs?.phone || ""}
                                    className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-light focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20"
                                    placeholder="+32 123 45 67 89"
                                />
                                {state?.errors?.phone && (
                                    <p className="text-red-500 text-sm mt-2">{state.errors.phone[0]}</p>
                                )}
                            </div>

                            {/* Region Input */}
                            <div className="group">
                                <label htmlFor="regio" className="block text-sm font-medium mb-2 opacity-60 group-focus-within:opacity-100 transition-opacity">
                                    Regio <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="regio"
                                    name="regio"
                                    required
                                    defaultValue={state?.inputs?.regio || ""}
                                    className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-light focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20"
                                    placeholder="Limburg, Antwerpen, Brussel..."
                                />
                                {state?.errors?.regio && (
                                    <p className="text-red-500 text-sm mt-2">{state.errors.regio[0]}</p>
                                )}
                            </div>

                            {/* BTW Number Input (Optional) */}
                            <div className="group">
                                <label htmlFor="btwNumber" className="block text-sm font-medium mb-2 opacity-60 group-focus-within:opacity-100 transition-opacity">
                                    BTW Nummer <span className="opacity-50 font-normal">(Optioneel)</span>
                                </label>
                                <input
                                    type="text"
                                    id="btwNumber"
                                    name="btwNumber"
                                    defaultValue={state?.inputs?.btwNumber || ""}
                                    className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-light focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20"
                                    placeholder="BE 0123.456.789"
                                />
                            </div>

                            {/* Message Input */}
                            <div className="group mb-2">
                                <label htmlFor="message" className="block text-sm font-medium mb-2 opacity-60 group-focus-within:opacity-100 transition-opacity">
                                    Uw Bericht <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={3}
                                    defaultValue={state?.inputs?.message || ""}
                                    className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-light focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20 resize-none"
                                    placeholder="Vertel ons over uw project..."
                                />
                                {state?.errors?.message && (
                                    <p className="text-red-500 text-sm mt-2">{state.errors.message[0]}</p>
                                )}
                            </div>

                            {/* Action Row: reCAPTCHA + Submit Button */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-8 w-full">
                                {/* Google reCAPTCHA v2 */}
                                <div className="group mb-2 sm:mb-0">
                                    <ReCAPTCHA
                                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                                    />
                                    {state?.errors?.['g-recaptcha-response'] && (
                                        <p className="text-red-500 text-sm mt-2">{state.errors['g-recaptcha-response'][0]}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="group flex items-center gap-4 text-lg font-medium hover:opacity-70 transition-opacity disabled:opacity-50"
                                >
                                    {isPending ? "Verzenden..." : "Verstuur Aanvraag"}
                                    <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <ArrowRight className="w-5 h-5" />
                                    </span>
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
