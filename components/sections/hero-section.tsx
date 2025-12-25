"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function HeroSection() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#F5F5F7] flex flex-col justify-between">
            {/* Background Media - Light & Airy Architectural Vibe */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover opacity-80 mix-blend-multiply filter contrast-[0.9] brightness-110"
                    style={{ transform: loaded ? "scale(1)" : "scale(1.05)", transition: "transform 10s ease-out" }}
                >
                    {/* 
             Using a very light, abstract architectural video. 
             If this specific link fails or is too dark, the opacity/mix-blend will help keep it light.
           */}
                    <source
                        src="https://videos.pexels.com/video-files/7578543/7578543-hd_1920_1080_30fps.mp4"
                        type="video/mp4"
                    />
                </video>
                {/* White overlay to ensure text contrast for DARK text */}
                <div className="absolute inset-0 bg-white/20" />
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 w-full flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24">
                <FadeIn delay={0.2} className="max-w-[90vw]">
                    <h1 className="text-[#121212] mb-8">
                        <span className="block text-[12vw] leading-[0.8] font-light tracking-tighter">
                            Buitenleven
                        </span>
                        <span className="block text-[12vw] leading-[0.8] font-bold tracking-tighter ml-[10vw]">
                            Gedefinieerd
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.4} className="flex flex-col md:flex-row items-start md:items-end justify-between mt-12">
                    <p className="max-w-md text-[#121212] text-lg md:text-xl font-medium leading-relaxed">
                        Wij ontwerpen architecturale aluminium constructies die de grens tussen binnen en buiten doen vervagen.
                    </p>

                    <Link
                        href="/portfolio"
                        className="group mt-8 md:mt-0 flex items-center gap-4 text-[#121212] hover:opacity-70 transition-opacity"
                    >
                        <span className="uppercase tracking-widest text-sm font-bold">Bekijk Projecten</span>
                        <div className="w-12 h-12 border border-[#121212] rounded-full flex items-center justify-center group-hover:bg-[#121212] group-hover:text-white transition-all duration-300">
                            <span className="block w-2 h-2 bg-current rounded-full" />
                        </div>
                    </Link>
                </FadeIn>
            </div>

            {/* Footer / Scroll Indicator */}
            <div className="relative z-10 w-full px-6 md:px-12 pb-12 flex justify-between items-end">
                <div className="hidden md:block text-[#121212]/40 text-xs font-mono uppercase tracking-widest">
                    [EST. 2008] — Hasselt, BE
                </div>
                <div className="animate-bounce text-[#121212]/60">
                    <ArrowDown size={24} strokeWidth={1} />
                </div>
            </div>
        </section>
    )
}
