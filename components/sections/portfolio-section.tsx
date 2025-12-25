"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
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
        image: "https://images.unsplash.com/photo-1593005510529-6ba4238e70bc?q=80&w=2670&auto=format&fit=crop",
        className: "md:col-span-8 aspect-[16/9]"
    }
]

export function PortfolioSection() {
    return (
        <section className="py-32 bg-[#121212] text-white">
            <div className="container mx-auto px-6 md:px-12 max-w-[1920px]">
                <div className="flex justify-between items-end mb-24 border-b border-white/10 pb-8">
                    <div>
                        <span className="text-sm font-mono uppercase tracking-widest text-white/50 block mb-4">
                            Geselecteerde Projecten
                        </span>
                        <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
                            Portfolio
                        </h2>
                    </div>
                    <Link
                        href="/portfolio"
                        className="hidden md:flex items-center gap-2 border-b border-white pb-1 hover:opacity-70 transition-opacity"
                    >
                        Bekijk Archief <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                    {projects.map((project, idx) => (
                        <Link
                            key={idx}
                            href="/portfolio"
                            className={`group block relative ${project.className} mb-12 md:mb-0`}
                        >
                            {/* 
                   Updated to use ScrollRevealImage. 
                   Images will scroll-reveal from grayscale to color.
                */}
                            <ScrollRevealImage
                                src={project.image}
                                alt={project.title}
                                wrapperClassName="w-full h-full"
                            />

                            {/* Text overlay/details */}
                            <div className="mt-4 flex justify-between items-start opacity-100 md:opacity-70 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <h3 className="text-xl font-medium">{project.title}</h3>
                                    <p className="text-sm text-white/60">{project.location}</p>
                                </div>
                                <span className="text-sm font-mono text-white/50 border px-2 py-0.5 rounded-full border-white/20">
                                    {project.category}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 md:hidden text-center">
                    <Link
                        href="/portfolio"
                        className="inline-block border border-white/30 px-8 py-3 uppercase tracking-widest text-sm"
                    >
                        Bekijk Alle Projecten
                    </Link>
                </div>
            </div>
        </section>
    )
}
