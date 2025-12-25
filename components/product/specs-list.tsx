"use client"

import { FadeIn } from "@/components/ui/fade-in"

export interface SpecItem {
    label: string
    value: string
}

interface SpecsListProps {
    title: string
    items: SpecItem[]
    delay?: number
}

export function SpecsList({ title, items, delay = 0.2 }: SpecsListProps) {
    return (
        <FadeIn delay={delay}>
            <h2 className="text-3xl font-medium mb-8">{title}</h2>
            <ul className="space-y-4 border-t border-black/10 pt-4">
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className="flex justify-between py-2 border-b border-black/10"
                    >
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                    </li>
                ))}
            </ul>
        </FadeIn>
    )
}
