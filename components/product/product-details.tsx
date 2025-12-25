"use client"

import { FadeIn } from "@/components/ui/fade-in"
import { SpecsList, type SpecItem } from "./specs-list"

interface ProductDetailsProps {
    specsTitle: string
    specs: SpecItem[]
    contentTitle: string
    content: React.ReactNode
}

export function ProductDetails({
    specsTitle,
    specs,
    contentTitle,
    content
}: ProductDetailsProps) {
    return (
        <section className="py-32">
            <div className="container mx-auto px-6 md:px-12 max-w-[1920px]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                    <div className="md:col-span-4">
                        <SpecsList title={specsTitle} items={specs} />
                    </div>
                    <div className="md:col-span-8">
                        <FadeIn delay={0.4}>
                            <h2 className="text-3xl font-medium mb-8">{contentTitle}</h2>
                            <div className="prose prose-lg text-muted-foreground leading-relaxed max-w-none">
                                {content}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    )
}
