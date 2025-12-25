import { cn } from "@/lib/utils"

interface SectionProps {
    children: React.ReactNode
    variant?: "default" | "dark" | "light" | "transparent"
    padding?: "none" | "sm" | "md" | "lg" | "xl"
    className?: string
    id?: string
}

const variantClasses = {
    default: "bg-background text-foreground",
    dark: "bg-[#121212] text-white",
    light: "bg-[#F5F5F7] text-foreground",
    transparent: "bg-transparent",
}

const paddingClasses = {
    none: "",
    sm: "py-16",
    md: "py-24",
    lg: "py-32",
    xl: "py-40",
}

export function Section({
    children,
    variant = "default",
    padding = "lg",
    className,
    id,
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                variantClasses[variant],
                paddingClasses[padding],
                className
            )}
        >
            {children}
        </section>
    )
}
