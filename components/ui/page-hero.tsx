"use client"

import { FadeIn } from "@/components/ui/fade-in"
import { Container } from "@/components/layout/container"
import { cn } from "@/lib/utils"

interface PageHeroProps {
    label?: string
    title: React.ReactNode
    maxWidth?: string
    borderBottom?: boolean
    className?: string
}

export function PageHero({
    label,
    title,
    maxWidth = "max-w-4xl",
    borderBottom = false,
    className,
}: PageHeroProps) {
    return (
        <section className={cn(
            "pt-32 pb-24",
            borderBottom && "border-b border-black/10",
            className
        )}>
            <Container>
                <FadeIn delay={0.1}>
                    {label && (
                        <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground block mb-6">
                            {label}
                        </span>
                    )}
                    <h1 className={cn(
                        "text-5xl md:text-8xl font-medium tracking-tighter leading-[0.9] text-black",
                        maxWidth
                    )}>
                        {title}
                    </h1>
                </FadeIn>
            </Container>
        </section>
    )
}
