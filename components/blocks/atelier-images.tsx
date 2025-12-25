"use client"

import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { cn } from "@/lib/utils"

export interface AtelierImage {
    src: string
    alt: string
}

interface AtelierImagesProps {
    images: AtelierImage[]
    grayscale?: boolean
    height?: string
    className?: string
}

export function AtelierImages({
    images,
    grayscale = true,
    height = "h-[60vh]",
    className,
}: AtelierImagesProps) {
    const [large, small1, small2] = images

    const imageClasses = cn(
        "w-full h-full object-cover transition-all duration-1000",
        grayscale && "grayscale hover:grayscale-0"
    )

    return (
        <Section padding="none" className={cn("pb-32", className)}>
            <Container>
                <div className={cn("grid grid-cols-1 md:grid-cols-12 gap-4", height)}>
                    {/* Large image - 8 columns */}
                    <div className="md:col-span-8 h-full relative overflow-hidden bg-neutral-100">
                        <img
                            src={large?.src}
                            alt={large?.alt || "Image"}
                            className={imageClasses}
                        />
                    </div>

                    {/* Two stacked images - 4 columns */}
                    <div className="md:col-span-4 h-full flex flex-col gap-4">
                        <div className="flex-1 relative overflow-hidden bg-neutral-100">
                            <img
                                src={small1?.src}
                                alt={small1?.alt || "Image"}
                                className={imageClasses}
                            />
                        </div>
                        <div className="flex-1 relative overflow-hidden bg-neutral-100">
                            <img
                                src={small2?.src}
                                alt={small2?.alt || "Image"}
                                className={imageClasses}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
