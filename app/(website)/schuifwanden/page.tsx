"use client"

import { PageWrapper } from "@/components/layout"
import { ProductHero, ProductHeroImage, ProductDetails, ImageGallery } from "@/components/product"
import { ContactSection } from "@/components/sections/contact-section"

const specs = [
    { label: "Glasdikte", value: "10mm Gehard" },
    { label: "Systeem", value: "Onderlopend railsysteem" },
    { label: "Profielen", value: "Ultra-slank aluminium" },
    { label: "Opties", value: "Handgrepen, Tochtborstels" },
]

const galleryImages = [
    { src: "glazenschuifwand-1.jpg", alt: "Schuifwanden project 1" },
    { src: "glazenschuifwand-2.jpg", alt: "Schuifwanden project 2" },
    { src: "glazenschuifwand-3.jpg", alt: "Schuifwanden project 3" },
]

export default function SchuifwandenPage() {
    return (
        <PageWrapper>
            <ProductHero
                title={<>Glazen <br /> Schuifwanden</>}
                description="Vervaag de grens tussen binnen en buiten. Beschutting tegen wind en regen met behoud van maximaal uitzicht."
            />

            <ProductHeroImage
                src="/SCHUIFWANDEN-HERO.jpeg"
                alt="Schuifwanden Hero"
            />

            <ProductDetails
                specsTitle="Eigenschappen"
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
                title="Realisaties"
                images={galleryImages}
                layout="mix-60-40"
            />

            <ContactSection />
        </PageWrapper>
    )
}
