"use client"

import { Check } from "lucide-react"
import { useTranslations } from "next-intl"

export function WhyChooseUsSection() {
    const t = useTranslations("WhyChooseUs")

    const features = [
        t("features.f1"),
        t("features.f2"),
        t("features.f3"),
        t("features.f4"),
        t("features.f5"),
        t("features.f6")
    ]
    return (
        <section className="py-32 bg-background border-y border-black/10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

                    {/* Left Content */}
                    <div>
                        <h2 
                            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 leading-[1.1]"
                            dangerouslySetInnerHTML={{ __html: t("title") }}
                        />
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-md mb-12">
                            {t("subtitle")}
                        </p>

                        <div className="space-y-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black/5 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <span className="text-lg font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image / Graphic */}
                    <div className="relative aspect-square md:aspect-4/5 bg-neutral-100 overflow-hidden">
                        <img
                            src="essystems-polyclose.jpeg"
                            alt="Team ES Systems"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 opacity-80 hover:scale-105 transition-all duration-1000 ease-out"
                        />
                        <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 border border-black/5">
                            <div className="flex justify-between items-end">
                                <div>
                                    <span className="block text-4xl font-bold mb-1">98%</span>
                                    <span className="text-sm uppercase tracking-widest text-muted-foreground">{t("stats.s1")}</span>
                                </div>
                                <div className="text-right">
                                    <span className="block text-4xl font-bold mb-1">8+</span>
                                    <span className="text-sm uppercase tracking-widest text-muted-foreground">{t("stats.s2")}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
