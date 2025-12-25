import { cn } from "@/lib/utils"

interface PageWrapperProps {
    children: React.ReactNode
    className?: string
}

export function PageWrapper({ children, className }: PageWrapperProps) {
    return (
        <div className={cn(
            "bg-background text-foreground selection:bg-black selection:text-white",
            className
        )}>
            {children}
        </div>
    )
}
