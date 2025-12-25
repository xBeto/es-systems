"use client"

import { FadeIn } from "@/components/ui/fade-in"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
    label?: string
    title: React.ReactNode
    description?: string
    alignment?: "left" | "center"
    variant?: "light" | "dark"
    className?: string
}

export function SectionTitle({
    label,
    title,
    description,
    alignment = "left",
    variant = "light",
    className,
}: SectionTitleProps) {
    const isDark = variant === "dark"

    return (
        <FadeIn className={cn(
            alignment === "center" && "text-center",
            className
        )}>
            {label && (
                <span className={cn(
                    "text-sm font-mono uppercase tracking-widest block mb-4",
                    isDark ? "text-white/50" : "text-muted-foreground"
                )}>
                    {label}
                </span>
            )}
            <h2 className={cn(
                "text-4xl md:text-6xl font-medium tracking-tight",
                isDark ? "text-white" : "text-foreground"
            )}>
                {title}
            </h2>
            {description && (
                <p className={cn(
                    "mt-6 text-lg max-w-lg",
                    isDark ? "text-white/60" : "text-muted-foreground",
                    alignment === "center" && "mx-auto"
                )}>
                    {description}
                </p>
            )}
        </FadeIn>
    )
}
