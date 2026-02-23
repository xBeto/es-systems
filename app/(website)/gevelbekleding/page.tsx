"use client"

import { PageWrapper } from "@/components/layout"
import { ProductHero, ProductHeroImage, ProductDetails, ImageGallery } from "@/components/product"
import { ContactSection } from "@/components/sections/contact-section"

const specs = [
    { label: "Materiaal", value: "Hoogwaardig Aluminium" },
    { label: "Afwerking", value: "Poedercoating (Alle RAL-kleuren)" },
    { label: "Montage", value: "Onzichtbare bevestiging" },
    { label: "Duurzaamheid", value: "Onderhoudsarm & Weerbestendig" },
]

const galleryImages = [
    { src: "gevelbekleding-1.png", alt: "Gevelbekleding project 1" },
    { src: "gevelbekleding-2.webp", alt: "Gevelbekleding project 2" },
    { src: "gevelbekleding-3.webp", alt: "Gevelbekleding project 3" },
]

export default function GevelbekledingPage() {
    return (
        <PageWrapper>
            <ProductHero
                title={<>Aluminium <br /> Gevelbekleding</>}
                description="Geef uw woning een unieke uitstraling. Strakke lijnen, duurzame materialen en een perfecte afwerking voor een moderne look."
            />

            <ProductHeroImage
                src="/GEVELBEKLEDING-HERO.webp"
                alt="Aluminium Gevelbekleding Hero"
            />

            <ProductDetails
                specsTitle="Eigenschappen"
                specs={specs}
                contentTitle="Esthetiek & Functionaliteit"
                content={
                    <>
                        <p className="mb-6">
                            Onze aluminium gevelbekleding combineert architecturale schoonheid met technische perfectie.
                            Het systeem biedt niet alleen een visuele upgrade voor uw woning, maar zorgt ook voor een duurzame bescherming van uw gevel.
                        </p>
                        <p>
                            Dankzij de onzichtbare bevestiging en de mogelijkheid om isolatie te integreren, is dit de ideale oplossing voor zowel renovatie als nieuwbouw.
                            Kies uit een breed scala aan profielen en kleuren om uw persoonlijke stempel te drukken.
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
