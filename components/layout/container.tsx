import { cn } from "@/lib/utils"

interface ContainerProps {
    children: React.ReactNode
    size?: "default" | "wide" | "narrow"
    className?: string
}

const sizeClasses = {
    narrow: "max-w-3xl",
    default: "max-w-[1400px]",
    wide: "max-w-[1600px]",
}

export function Container({
    children,
    size = "default",
    className,
}: ContainerProps) {
    return (
        <div className={cn(
            "container mx-auto px-6 md:px-12",
            sizeClasses[size],
            className
        )}>
            {children}
        </div>
    )
}
