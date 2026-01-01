"use client"

import { PageWrapper } from "@/components/layout"
import { ProductHero, ProductHeroImage, ProductDetails, ImageGallery } from "@/components/product"
import { ContactSection } from "@/components/sections/contact-section"

const specs = [
    { label: "Glasdikte", value: "8mm / 10mm Gehard" },
    { label: "Systeem", value: "Onderlopend railsysteem" },
    { label: "Profielen", value: "Ultra-slank aluminium" },
    { label: "Opties", value: "Handgrepen, Tochtborstels" },
]

const galleryImages = [
    { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop", alt: "Schuifwanden project 1" },
    { src: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2670&auto=format&fit=crop", alt: "Schuifwanden project 2" },
    { src: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=987&auto=format&fit=crop", alt: "Schuifwanden project 3" },
]

export default function SchuifwandenPage() {
    return (
        <PageWrapper>
            <ProductHero
                seriesNumber="03"
                title={<>Glazen <br /> Schuifwanden</>}
                description="Vervaag de grens tussen binnen en buiten. Beschutting tegen wind en regen met behoud van maximaal uitzicht."
            />

            <ProductHeroImage
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2568&auto=format&fit=crop"
                alt="Schuifwanden Hero"
            />

            <ProductDetails
                specsTitle="Details"
                specs={specs}
                contentTitle="Comfort in Elk Seizoen"
                content={
                    <>
                        <p className="mb-6">
                            Transformeer uw terrasoverkapping tot een volwaardige tuinkamer. Onze glazen schuifwanden
                            bieden bescherming tegen de elementen zonder het open karakter van uw tuin te verliezen.
                        </p>
                        <p>
                            Dankzij het soepel lopende railsysteem schuift u de panelen moeiteloos open of dicht.
                            De panelen zijn voorzien van gepolijst veiligheidsglas voor maximale helderheid en veiligheid.
                            Met optionele meenemers opent u de volledige wand in één vloeiende beweging.
                        </p>
                    </>
                }
            />

            <ImageGallery
                title="Voorbeelden"
                images={galleryImages}
                layout="staggered-3"
            />

            <ContactSection />
        </PageWrapper>
    )
}
