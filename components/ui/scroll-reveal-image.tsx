"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    wrapperClassName?: string
}

export function ScrollRevealImage({ className, wrapperClassName, alt, ...props }: ScrollRevealImageProps) {
    const [isInView, setIsInView] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Hysteresis Logic:
                // Enter only when significantly visible (> 45%)
                // Exit only when almost completely gone (< 10%)
                if (entry.intersectionRatio > 0.45) {
                    setIsInView(true)
                } else if (entry.intersectionRatio < 0.1) {
                    setIsInView(false)
                }
            },
            {
                threshold: [0.1, 0.45], // Watch specifically for these crossing points
                rootMargin: "0px" // Use exact viewport
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div ref={ref} className={cn("overflow-hidden", wrapperClassName)}>
            <img
                {...props}
                alt={alt || "Image"}
                className={cn(
                    "w-full h-full object-cover transition-all duration-[1.5s] ease-out will-change-transform will-change-filter",
                    // Base state: Grayscale & slightly scaled up
                    "grayscale scale-110",
                    // View state: Color & Normal scale
                    isInView ? "grayscale-0 scale-100" : "",
                    // Hover state: Ensure it stays colored/scaled on hover too if user interacts
                    "group-hover:grayscale-0 group-hover:scale-100",
                    className
                )}
            />
        </div>
    )
}
