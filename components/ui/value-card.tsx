"use client"

import { cn } from "@/lib/utils"

interface ValueCardProps {
    number: string
    title: string
    description: string
    variant?: "light" | "dark"
}

export function ValueCard({
    number,
    title,
    description,
    variant = "dark"
}: ValueCardProps) {
    const isDark = variant === "dark"

    return (
        <div className={cn(
            "border-t pt-8",
            isDark ? "border-white/20" : "border-black/10"
        )}>
            <span className={cn(
                "text-4xl font-light mb-4 block",
                isDark ? "text-white/40" : "text-black/40"
            )}>
                {number}
            </span>
            <h3 className={cn(
                "text-xl font-medium mb-4",
                isDark ? "text-white" : "text-foreground"
            )}>
                {title}
            </h3>
            <p className={isDark ? "text-white/60" : "text-muted-foreground"}>
                {description}
            </p>
        </div>
    )
}
