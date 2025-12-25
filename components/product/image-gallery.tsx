"use client"

import { ScrollRevealImage } from "@/components/ui/scroll-reveal-image"
import { cn } from "@/lib/utils"

export interface GalleryImage {
    src: string
    alt?: string
    aspectRatio?: "square" | "portrait" | "landscape" | "wide"
    className?: string
}

interface ImageGalleryProps {
    title: string
    images: GalleryImage[]
    layout?: "asymmetric-2col" | "asymmetric-2col-alt" | "grid-3" | "staggered-3"
}

const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[4/5]",
    landscape: "aspect-[16/9]",
    wide: "aspect-[3/4]"
}

export function ImageGallery({
    title,
    images,
    layout = "asymmetric-2col"
}: ImageGalleryProps) {
    return (
        <section className="pb-32">
            <div className="container mx-auto px-6 md:px-12 max-w-[1920px]">
                <h2 className="text-3xl font-medium mb-12">{title}</h2>
                {layout === "asymmetric-2col" && (
                    <Asymmetric2Col images={images} />
                )}
                {layout === "asymmetric-2col-alt" && (
                    <Asymmetric2ColAlt images={images} />
                )}
                {layout === "grid-3" && (
                    <Grid3 images={images} />
                )}
                {layout === "staggered-3" && (
                    <Staggered3 images={images} />
                )}
            </div>
        </section>
    )
}

// Layout: Large portrait left, two stacked on right
function Asymmetric2Col({ images }: { images: GalleryImage[] }) {
    const [first, second, third] = images
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <ScrollRevealImage
                    src={first?.src || ""}
                    alt={first?.alt}
                    wrapperClassName="w-full h-full"
                />
            </div>
            <div className="space-y-4">
                <div className="group relative aspect-square overflow-hidden bg-neutral-100">
                    <ScrollRevealImage
                        src={second?.src || ""}
                        alt={second?.alt}
                        wrapperClassName="w-full h-full"
                    />
                </div>
                <div className="group relative aspect-[16/9] overflow-hidden bg-neutral-100">
                    <ScrollRevealImage
                        src={third?.src || ""}
                        alt={third?.alt}
                        wrapperClassName="w-full h-full"
                    />
                </div>
            </div>
        </div>
    )
}

// Layout: Two stacked on left, large portrait right
function Asymmetric2ColAlt({ images }: { images: GalleryImage[] }) {
    const [first, second, third] = images
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
                <div className="group relative aspect-[16/9] overflow-hidden bg-neutral-100">
                    <ScrollRevealImage
                        src={first?.src || ""}
                        alt={first?.alt}
                        wrapperClassName="w-full h-full"
                    />
                </div>
                <div className="group relative aspect-square overflow-hidden bg-neutral-100">
                    <ScrollRevealImage
                        src={second?.src || ""}
                        alt={second?.alt}
                        wrapperClassName="w-full h-full"
                    />
                </div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <ScrollRevealImage
                    src={third?.src || ""}
                    alt={third?.alt}
                    wrapperClassName="w-full h-full"
                />
            </div>
        </div>
    )
}

// Layout: 3 columns, same aspect ratio
function Grid3({ images }: { images: GalleryImage[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.slice(0, 3).map((image, idx) => (
                <div
                    key={idx}
                    className={cn(
                        "group relative overflow-hidden bg-neutral-100",
                        image.aspectRatio ? aspectClasses[image.aspectRatio] : "aspect-[3/4]",
                        image.className
                    )}
                >
                    <ScrollRevealImage
                        src={image.src}
                        alt={image.alt}
                        wrapperClassName="w-full h-full"
                    />
                </div>
            ))}
        </div>
    )
}

// Layout: 3 columns with middle offset
function Staggered3({ images }: { images: GalleryImage[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.slice(0, 3).map((image, idx) => (
                <div
                    key={idx}
                    className={cn(
                        "group relative overflow-hidden bg-neutral-100",
                        image.aspectRatio ? aspectClasses[image.aspectRatio] : "aspect-[3/4]",
                        idx === 1 && "md:translate-y-12",
                        image.className
                    )}
                >
                    <ScrollRevealImage
                        src={image.src}
                        alt={image.alt}
                        wrapperClassName="w-full h-full"
                    />
                </div>
            ))}
        </div>
    )
}
