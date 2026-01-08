"use client"

import { PageWrapper } from "@/components/layout"
import { ProductHero, ProductHeroImage, ProductDetails, ImageGallery } from "@/components/product"
import { ContactSection } from "@/components/sections/contact-section"

const specs = [
    { label: "Materiaal", value: "100% Aluminium" },
    { label: "Dakbedekking", value: "Glas / Polycarbonaat" },
    { label: "Overspanning", value: "Tot 5/6 meter (vrijdragend)" },
    { label: "Garantie", value: "10 Jaar" },
]

const galleryImages = [
    { src: "terrasoverkapping-1.jpg", alt: "Terrasoverkapping project 1" },
    { src: "terrasoverkapping-3.jpg", alt: "Terrasoverkapping project 2" },
    { src: "terrasoverkapping-2.jpg", alt: "Terrasoverkapping project 3" },
]

export default function TerrasoverkappingenPage() {
    return (
        <PageWrapper>
            <ProductHero
                title={<>Terras <br /> Overkappingen</>}
                description="Verleng uw leefruimte. Architecturale bescherming tegen zon, regen en wind, zonder compromissen."
            />

            <ProductHeroImage
                src="/TERRASOVERKAPPING-HERO.jpg"
                alt="Terrasoverkapping Hero"
            />

            <ProductDetails
                specsTitle="Eigenschappen"
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
