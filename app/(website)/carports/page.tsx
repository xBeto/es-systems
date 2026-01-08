"use client"

import { PageWrapper } from "@/components/layout"
import { ProductHero, ProductHeroImage, ProductDetails, ImageGallery } from "@/components/product"
import { ContactSection } from "@/components/sections/contact-section"

const specs = [
    { label: "Constructie", value: "Vrijstaand of Aanbouw" },
    { label: "Daktype", value: "Gebogen" },
    { label: "Afwerking", value: "Poedercoating (alle RAL)" },
    { label: "Extra's", value: "LED" },
]

const galleryImages = [
    { src: "carport-1.jpeg", alt: "Carport project 1" },
    { src: "carport-2.jpeg", alt: "Carport project 2" },
    { src: "carport-3.jpeg", alt: "Carport project 3" },
]

export default function CarportsPage() {
    return (
        <PageWrapper>
            <ProductHero
                title={<>Aluminium <br /> Carports</>}
                description="Premium bescherming voor uw voertuig. Strak design dat naadloos aansluit bij moderne architectuur."
            />

            <ProductHeroImage
                src="/CARPORT-HERO.jpeg"
                alt="Carport Hero"
            />

            <ProductDetails
                specsTitle="Eigenschappen"
                specs={specs}
                contentTitle="Functionele Esthetiek"
                content={
                    <>
                        <p className="mb-6">
                            Een carport is meer dan louter functioneel; het is een prominent onderdeel van uw gevelbeeld.
                            Onze aluminium carports combineren een lichte, open structuur met robuuste weersbestendigheid.
                        </p>
                        <p>
                            We ontwerpen elke carport op maat van uw woning en wagenpark. Van compacte enkele carports
                            tot ruime dubbele opstellingen met geïntegreerde berging voor fietsen of tuingereedschap.
                            Perfect voorbereid op de toekomst met opties voor EV-laadpalen en zonnepanelen.
                        </p>
                    </>
                }
            />

            <ImageGallery
                title="Realisaties"
                images={galleryImages}
                layout="hero-landscape"
            />

            <ContactSection />
        </PageWrapper>
    )
}
