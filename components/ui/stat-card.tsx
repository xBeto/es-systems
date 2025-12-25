import { cn } from "@/lib/utils"

interface StatCardProps {
    value: string
    label: string
    variant?: "light" | "dark"
    className?: string
}

export function StatCard({
    value,
    label,
    variant = "light",
    className,
}: StatCardProps) {
    const isDark = variant === "dark"

    return (
        <div className={className}>
            <span className={cn(
                "block text-4xl font-bold mb-1",
                isDark ? "text-white" : "text-foreground"
            )}>
                {value}
            </span>
            <span className={cn(
                "text-sm uppercase tracking-widest",
                isDark ? "text-white/60" : "text-muted-foreground"
            )}>
                {label}
            </span>
        </div>
    )
}
