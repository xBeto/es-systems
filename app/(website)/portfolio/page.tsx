"use client"

import { ContactSection } from "@/components/sections/contact-section"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { ScrollRevealImage } from "@/components/ui/scroll-reveal-image"
import { FadeIn } from "@/components/ui/fade-in"

const projects = [
    {
        category: "Terrasoverkapping",
        image: "terrasoverkapping-1.jpg",
        className: "md:col-span-8 aspect-[16/9]"
    },
    {
        category: "Carport",
        image: "carport-1.jpeg",
        className: "md:col-span-4 aspect-[4/5]"
    },
    {
        category: "Schuifwanden",
        image: "glazenschuifwand-2.jpg",
        className: "md:col-span-4 aspect-[4/5] md:mt-[-50px]"
    },
    {
        category: "Gevelbekleding",
        image: "gevelbekleding-3.png",
        className: "md:col-span-8 aspect-[16/9]"
    },
    {
        category: "Gevelbekleding",
        image: "gevelbekleding-2.png",
        className: "md:col-span-6 aspect-square"
    },
    {
        category: "Terrasoverkapping",
        image: "terrasoverkapping-2.jpg",
        className: "md:col-span-6 aspect-square md:mt-[30px]"
    },
    {
        category: "Schuifwanden",
        image: "glazenschuifwand-4.jpg",
        className: "md:col-span-6 aspect-[4/3] md:mt-[-50px]"
    },
    {
        category: "Terrasoverkapping",
        image: "terrasoverkapping-4.jpg",
        className: "md:col-span-6 aspect-square md:mt-[-25px]"
    },
    {
        category: "Terrasoverkapping",
        image: "terrasoverkapping-5.png",
        className: "md:col-span-6 md:mt-[-220px]"
    },
    {
        category: "Schuifwanden",
        image: "glazenschuifwand-5.jpg",
        className: "md:col-span-6 aspect-[16/7]"
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
                                    wrapperClassName="w-full h-full"
                                />

                                <div className="mt-4 flex items-start">
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
