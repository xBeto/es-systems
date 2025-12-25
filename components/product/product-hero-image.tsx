"use client"

import { ScrollRevealImage } from "@/components/ui/scroll-reveal-image"
import { cn } from "@/lib/utils"

interface ProductHeroImageProps {
    src: string
    alt: string
    height?: "short" | "default" | "tall"
}

const heightClasses = {
    short: "h-[50vh] md:h-[60vh]",
    default: "h-[60vh] md:h-[80vh]",
    tall: "h-[70vh] md:h-[90vh]"
}

export function ProductHeroImage({
    src,
    alt,
    height = "default"
}: ProductHeroImageProps) {
    return (
        <div className={cn(
            "w-full relative overflow-hidden bg-neutral-200",
            heightClasses[height]
        )}>
            <ScrollRevealImage
                src={src}
                alt={alt}
                wrapperClassName="w-full h-full"
            />
        </div>
    )
}
