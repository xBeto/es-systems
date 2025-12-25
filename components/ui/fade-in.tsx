"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FadeInProps {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
    yOffset?: number
}

export function FadeIn({
    children,
    className,
    delay = 0,
    duration = 0.8,
    yOffset = 20
}: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98] // Custom "lux" ease
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    )
}
