"use client"

import { FadeIn } from "@/components/ui/fade-in"
import { cn } from "@/lib/utils"

interface QuoteBlockProps {
    quote: string
    author?: string
    variant?: "light" | "dark"
    size?: "base" | "lg" | "xl"
    className?: string
}

const sizeClasses = {
    base: "text-xl md:text-2xl",
    lg: "text-2xl md:text-3xl",
    xl: "text-3xl md:text-4xl",
}

export function QuoteBlock({
    quote,
    author,
    variant = "light",
    size = "lg",
    className,
}: QuoteBlockProps) {
    const isDark = variant === "dark"

    return (
        <FadeIn className={cn(className)}>
            <blockquote className={cn(
                "font-medium leading-tight",
                sizeClasses[size],
                isDark ? "text-white" : "text-foreground"
            )}>
                "{quote}"
            </blockquote>
            {author && (
                <cite className={cn(
                    "block mt-4 text-sm not-italic",
                    isDark ? "text-white/60" : "text-muted-foreground"
                )}>
                    — {author}
                </cite>
            )}
        </FadeIn>
    )
}
