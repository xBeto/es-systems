"use client"

import { Check } from "lucide-react"

const features = [
    "Eigen fabricage & plaatsingsdienst",
    "100% aluminium",
    "Oplossingen op maat",
    "10+ jaar garantie",
    "Snelle oplevering",
    "Persoonlijke service"
]

export function WhyChooseUsSection() {
    return (
        <section className="py-32 bg-background border-y border-black/10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 leading-[1.1]">
                            Waarom kiezen voor <br /> ES Systems?
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-md mb-12">
                            Wij geloven in de kracht van eenvoud en kwaliteit. Geen loze beloftes, maar tastbaar vakmanschap dat generaties meegaat.
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
                    <div className="relative aspect-square md:aspect-[4/5] bg-neutral-100 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
                            alt="Team ES Systems"
                            className="w-full h-full object-cover grayscale opacity-80 hover:scale-105 transition-transform duration-[1.5s] ease-out"
                        />
                        <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 border border-black/5">
                            <div className="flex justify-between items-end">
                                <div>
                                    <span className="block text-4xl font-bold mb-1">98%</span>
                                    <span className="text-sm uppercase tracking-widest text-muted-foreground">Klanttevredenheid</span>
                                </div>
                                <div className="text-right">
                                    <span className="block text-4xl font-bold mb-1">8+</span>
                                    <span className="text-sm uppercase tracking-widest text-muted-foreground">Jaar ervaring</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
