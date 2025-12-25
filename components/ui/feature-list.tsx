"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureListProps {
    features: string[]
    variant?: "light" | "dark"
    className?: string
}

export function FeatureList({
    features,
    variant = "light",
    className,
}: FeatureListProps) {
    const isDark = variant === "dark"

    return (
        <div className={cn("space-y-4", className)}>
            {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                    <div className={cn(
                        "w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300",
                        isDark
                            ? "bg-white/10 group-hover:bg-white group-hover:text-black"
                            : "bg-black/5 group-hover:bg-black group-hover:text-white"
                    )}>
                        <Check className="w-4 h-4" />
                    </div>
                    <span className={cn(
                        "text-lg font-medium",
                        isDark ? "text-white" : "text-foreground"
                    )}>
                        {feature}
                    </span>
                </div>
            ))}
        </div>
    )
}
