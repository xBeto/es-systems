"use client"

import { PageWrapper } from "@/components/layout"
import { ProductHero, ProductHeroImage, ProductDetails, ImageGallery } from "@/components/product"
import { ContactSection } from "@/components/sections/contact-section"

const specs = [
    { label: "Materiaal", value: "6063-T6 Aluminium" },
    { label: "Dakbedekking", value: "Veiligheidsglas / Polycarbonaat" },
    { label: "Overspanning", value: "Tot 7 meter (vrijdragend)" },
    { label: "Garantie", value: "10 Jaar" },
]

const galleryImages = [
    { src: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2670&auto=format&fit=crop", alt: "Terrasoverkapping project 1" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop", alt: "Terrasoverkapping project 2" },
    { src: "https://images.unsplash.com/photo-1599809275311-5bc51cdc3e0f?q=80&w=2670&auto=format&fit=crop", alt: "Terrasoverkapping project 3" },
]

export default function TerrasoverkappingenPage() {
    return (
        <PageWrapper>
            <ProductHero
                seriesNumber="01"
                title={<>Terras <br /> Overkappingen</>}
                description="Verleng uw leefruimte. Architecturale bescherming tegen zon, regen en wind, zonder compromissen."
            />

            <ProductHeroImage
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
                alt="Terrasoverkapping Hero"
            />

            <ProductDetails
                specsTitle="Specificaties"
                specs={specs}
                contentTitle="Design Filosofie"
                content={
                    <>
                        <p className="mb-6">
                            Onze terrasoverkappingen zijn ontworpen met één doel: het naadloos integreren van binnen- en buitenleven.
                            We schuwen onnodige ornamenten en kiezen voor strakke lijnen die de architectuur van uw woning respecteren en versterken.
                        </p>
                        <p>
                            Dankzij ons innovatieve modulaire systeem kunnen we elke overkapping volledig personaliseren.
                            Geïntegreerde LED-verlichting, onzichtbare waterafvoer en optionele glazen schuifwanden maken het plaatje compleet.
                        </p>
                    </>
                }
            />

            <ImageGallery
                title="Realisaties"
                images={galleryImages}
                layout="asymmetric-2col"
            />

            <ContactSection />
        </PageWrapper>
    )
}
