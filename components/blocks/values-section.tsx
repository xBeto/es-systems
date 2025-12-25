"use client"

import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { ValueCard } from "@/components/ui/value-card"
import { cn } from "@/lib/utils"

export interface Value {
    number: string
    title: string
    description: string
}

interface ValuesSectionProps {
    values: Value[]
    columns?: 2 | 3 | 4
    className?: string
}

const columnClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
}

export function ValuesSection({
    values,
    columns = 3,
    className,
}: ValuesSectionProps) {
    return (
        <Section variant="dark" padding="lg" className={className}>
            <Container>
                <div className={cn(
                    "grid grid-cols-1 gap-12",
                    columnClasses[columns]
                )}>
                    {values.map((value) => (
                        <ValueCard
                            key={value.number}
                            number={value.number}
                            title={value.title}
                            description={value.description}
                            variant="dark"
                        />
                    ))}
                </div>
            </Container>
        </Section>
    )
}
