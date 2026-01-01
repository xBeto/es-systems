"use client"

import { PageWrapper } from "@/components/layout"
import { ProductHero, ProductHeroImage, ProductDetails, ImageGallery } from "@/components/product"
import { ContactSection } from "@/components/sections/contact-section"

const specs = [
    { label: "Constructie", value: "Vrijstaand of Aanbouw" },
    { label: "Daktype", value: "Vlak, Gebogen, Zadeldak" },
    { label: "Afwerking", value: "Poedercoating (alle RAL)" },
    { label: "Extra's", value: "LED, Laadpaal integratie" },
]

const galleryImages = [
    { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop", alt: "Carport project 1" },
    { src: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=987&auto=format&fit=crop", alt: "Carport project 2" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop", alt: "Carport project 3" },
]

export default function CarportsPage() {
    return (
        <PageWrapper>
            <ProductHero
                seriesNumber="02"
                title={<>Aluminium <br /> Carports</>}
                description="Premium bescherming voor uw voertuig. Strak design dat naadloos aansluit bij moderne architectuur."
            />

            <ProductHeroImage
                src="https://images.unsplash.com/photo-1762117360986-9753aef7680f?q=80&w=3132&auto=format&fit=crop"
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
                title="Projecten"
                images={galleryImages}
                layout="asymmetric-2col-alt"
            />

            <ContactSection />
        </PageWrapper>
    )
}
