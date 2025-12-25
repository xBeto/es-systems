"use client"

import { PageWrapper } from "@/components/layout"
import { PageHero } from "@/components/ui"
import { StorySection, AtelierImages, ValuesSection } from "@/components/blocks"
import { ContactSection } from "@/components/sections/contact-section"

const storyContent = {
    quote: "Wij geloven dat een buitenruimte geen nagedachte toevoeging is, maar een essentieel onderdeel van uw leefomgeving.",
    paragraphs: [
        "ES Systems begon meer dan 15 jaar geleden als een bescheiden atelier in Hasselt. Onze missie was helder: aluminium constructies maken die niet alleen technisch perfect zijn, maar ook esthetisch een meerwaarde bieden aan de moderne architectuur.",
        "Al onze producten worden nog steeds in eigen huis ontworpen en vervaardigd. Dit stelt ons in staat om strikte kwaliteitscontroles uit te voeren en 100% maatwerk te leveren. Geen standaard pakketten, maar oplossingen die tot op de millimeter aansluiten bij uw woning."
    ]
}

const atelierImages = [
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop", alt: "Atelier welding" },
    { src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop", alt: "Blueprints" },
    { src: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2670&auto=format&fit=crop", alt: "Installation" },
]

const values = [
    {
        number: "01",
        title: "Belgisch Design",
        description: "Ontworpen en geproduceerd in Limburg. Korte keten, maximale controle."
    },
    {
        number: "02",
        title: "Duurzaamheid",
        description: "Aluminium is 100% recycleerbaar. Wij werken uitsluitend met verantwoorde materialen."
    },
    {
        number: "03",
        title: "Transparantie",
        description: "Heldere afspraken, vaste prijzen en één aanspreekpunt tijdens uw hele project."
    },
]

export default function OverOnsPage() {
    return (
        <PageWrapper>
            <PageHero
                label="Over het atelier"
                title={<>Vakmanschap <br /> in Aluminium</>}
                borderBottom
            />
            <StorySection {...storyContent} />
            <AtelierImages images={atelierImages} grayscale />
            <ValuesSection values={values} />
            <ContactSection />
        </PageWrapper>
    )
}
