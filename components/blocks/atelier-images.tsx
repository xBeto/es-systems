"use client"

import Image from "next/image"
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
    className?: string
}

export function AtelierImages({
    images,
    grayscale = true,
    className,
}: AtelierImagesProps) {
    const [large, small1, small2] = images

    const imageClasses = cn(
        "object-cover transition-all duration-1000",
        grayscale && "md:grayscale hover:grayscale-0"
    )

    return (
        <Section padding="none" className={cn("pb-32", className)}>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:h-[60vh]">
                    {/* Large image - 8 columns */}
                    <div className="md:col-span-8 h-[40vh] md:h-full relative overflow-hidden bg-neutral-100">
                        <Image
                            src={large?.src}
                            alt={large?.alt || "Image"}
                            fill
                            className={imageClasses}
                        />
                    </div>

                    {/* Two stacked images - 4 columns */}
                    <div className="md:col-span-4 flex flex-col gap-4 md:h-full">
                        <div className="h-[25vh] md:flex-1 md:h-auto relative overflow-hidden bg-neutral-100">
                            <Image
                                src={small1?.src}
                                alt={small1?.alt || "Image"}
                                fill
                                className={imageClasses}
                            />
                        </div>
                        <div className="h-[25vh] md:flex-1 md:h-auto relative overflow-hidden bg-neutral-100">
                            <Image
                                src={small2?.src}
                                alt={small2?.alt || "Image"}
                                fill
                                className={imageClasses}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
