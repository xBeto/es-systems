"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setIsSubmitting(false)
    }

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
                        <form onSubmit={handleSubmit} className="space-y-12">

                            {/* Name Input */}
                            <div className="group">
                                <label htmlFor="name" className="block text-sm font-medium mb-2 opacity-60 group-focus-within:opacity-100 transition-opacity">
                                    Uw Naam
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-light focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="group">
                                <label htmlFor="email" className="block text-sm font-medium mb-2 opacity-60 group-focus-within:opacity-100 transition-opacity">
                                    Email Adres
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-light focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Message Input */}
                            <div className="group">
                                <label htmlFor="message" className="block text-sm font-medium mb-2 opacity-60 group-focus-within:opacity-100 transition-opacity">
                                    Uw Bericht
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={3}
                                    className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-light focus:outline-none focus:border-black transition-colors rounded-none placeholder:text-black/20 resize-none"
                                    placeholder="Vertel ons over uw project..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group flex items-center gap-4 text-lg font-medium hover:opacity-70 transition-opacity disabled:opacity-50"
                            >
                                {isSubmitting ? "Verzenden..." : "Verstuur Aanvraag"}
                                <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
