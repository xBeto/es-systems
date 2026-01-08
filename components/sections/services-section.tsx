"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

const services = [
    {
        title: "Terrasoverkappingen",
        description: "Architecturale bescherming die de grenzen van uw woning verlegt. Strakke lijnen, geïntegreerde technieken.",
        href: "/terrasoverkappingen"
    },
    {
        title: "Carports",
        description: "Functionele esthetiek voor uw wagenpark. Vrijstaand of aanbouw, altijd in harmonie met de omgeving.",
        href: "/carports"
    },
    {
        title: "Glazen Schuifwanden",
        description: "Maximale transparantie, maximaal comfort. Creëer een tuinkamer zonder visuele barrières.",
        href: "/schuifwanden"
    },
    {
        title: "Aluminium Gevelbekleding",
        description: "Architecturale bescherming die de grenzen van uw woning verlegt. Strakke lijnen, geïntegreerde technieken.",
        href: "/gevelbekleding"
    },
]

export function ServicesSection() {
    return (
        <section className="py-32 bg-background text-foreground overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
                <div className="md:mb-24 flex flex-col md:flex-row md:items-end justify-between md:border-b md:border-black/10 pb-8">
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight max-w-xl">
                        Onze <br /> Expertise
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-sm mt-8 md:mt-0">
                        Wij creëren op maat gemaakte oplossingen die functionaliteit en design naadloos integreren.
                    </p>
                </div>

                <div className="flex flex-col">
                    {services.map((service, idx) => (
                        <FadeIn key={service.title} delay={idx * 0.25}>
                            <Link
                                href={service.href}
                                className="group relative block border-t border-black/10 py-8 md:py-16 transition-all duration-500 hover:bg-[#F0F0F2]"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                                    {/* Mobile: Title + Arrow Wrapper */}
                                    <div className="flex items-center justify-between w-full md:contents gap-4">
                                        {/* Title */}
                                        <div className="md:w-[280px] lg:w-[360px] shrink-0 transition-transform duration-500 group-hover:translate-x-2 flex-1 md:flex-none">
                                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Arrow / Action */}
                                        <div className="flex items-center gap-4 shrink-0 md:ml-auto md:order-last mr-4">
                                            <span className="hidden lg:block text-xs uppercase tracking-widest text-muted-foreground group-hover:text-black transition-colors">
                                                Bekijk
                                            </span>
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="hidden md:block flex-1 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                        <p className="text-base leading-relaxed max-w-md">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                    <div className="border-t border-black/10" />
                </div>
            </div>
        </section>
    )
}
