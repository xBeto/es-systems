"use client"

import { FadeIn } from "@/components/ui/fade-in"

interface ProductHeroProps {
    seriesNumber?: string
    seriesLabel?: string
    title: React.ReactNode
    description: string
}

export function ProductHero({
    title,
    description
}: ProductHeroProps) {
    return (
        <section className="relative pt-32 pb-12 md:pb-16 flex flex-col justify-end">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-8">
                        <FadeIn delay={0.1}>
                            <h1 className="text-5xl md:text-8xl font-medium tracking-tighter leading-[0.9] text-black mb-12">
                                {title}
                            </h1>
                        </FadeIn>
                    </div>
                    <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end">
                        <FadeIn delay={0.3}>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-sm md:text-right">
                                {description}
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    )
}
