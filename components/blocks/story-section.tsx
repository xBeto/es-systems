"use client"

import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { QuoteBlock } from "@/components/ui/quote-block"
import { FadeIn } from "@/components/ui/fade-in"

interface StorySectionProps {
    quote: string
    paragraphs: string[]
    className?: string
}

export function StorySection({
    quote,
    paragraphs,
    className,
}: StorySectionProps) {
    return (
        <Section padding="lg" className={className}>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                    <QuoteBlock quote={quote} size="lg" />
                    <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                        {paragraphs.map((paragraph, idx) => (
                            <FadeIn key={idx} delay={0.4 + idx * 0.1}>
                                <p>{paragraph}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
