"use client"

import { ContactSection } from "@/components/sections/contact-section"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { ScrollRevealImage } from "@/components/ui/scroll-reveal-image"
import { FadeIn } from "@/components/ui/fade-in"

const projects = [
    {
        title: "Villa Ceulemans",
        category: "Terrasoverkapping",
        location: "Hasselt",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
        className: "md:col-span-8 aspect-[16/9]"
    },
    {
        title: "Parkzicht",
        category: "Carport",
        location: "Genk",
        image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2670&auto=format&fit=crop",
        className: "md:col-span-4 aspect-[4/5]"
    },
    {
        title: "Tuinkamer S.",
        category: "Schuifwanden",
        location: "Zonhoven",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop",
        className: "md:col-span-4 aspect-[4/5] md:mt-[-100px]"
    },
    {
        title: "Penthouse L.",
        category: "Totaalproject",
        location: "Maasmechelen",
        image: "/projects/penthouse-l.png",
        className: "md:col-span-8 aspect-[16/9]"
    },
    {
        title: "Project B.",
        category: "Carport",
        location: "Beringen",
        image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2670&auto=format&fit=crop",
        className: "md:col-span-6 aspect-square"
    },
    {
        title: "Residentie K.",
        category: "Terrasoverkapping",
        location: "Kiewit",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2568&auto=format&fit=crop",
        className: "md:col-span-6 aspect-square md:mt-[100px]"
    }
]

export default function PortfolioPage() {
    return (
        <div className="bg-background text-foreground selection:bg-black selection:text-white">

            {/* HER0 */}
            <section className="pt-32 pb-24">
                <div className="container mx-auto px-6 md:px-12">
                    <FadeIn delay={0.1}>
                        <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground block mb-6">
                            Geselecteerde Projecten
                        </span>
                        <h1 className="text-5xl md:text-8xl font-medium tracking-tighter leading-[0.9] text-black max-w-4xl">
                            Portfolio
                        </h1>
                    </FadeIn>
                </div>
            </section>

            {/* GRID */}
            <section className="pb-32">
                <div className="container mx-auto px-6 md:px-12 max-w-[1920px]">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                        {projects.map((project, idx) => (
                            <Link
                                key={idx}
                                href="/portfolio"
                                className={`group block relative ${project.className}`}
                            >
                                <ScrollRevealImage
                                    src={project.image}
                                    alt={project.title}
                                    wrapperClassName="w-full h-full"
                                />

                                <div className="mt-4 flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-medium">{project.title}</h3>
                                        <p className="text-sm text-muted-foreground">{project.location}</p>
                                    </div>
                                    <span className="text-sm font-mono text-muted-foreground border px-2 py-0.5 rounded-full border-black/10">
                                        {project.category}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    )
}
