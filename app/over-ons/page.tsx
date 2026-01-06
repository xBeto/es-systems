"use client"

import { PageWrapper } from "@/components/layout"
import { PageHero } from "@/components/ui"
import { StorySection, AtelierImages, ValuesSection } from "@/components/blocks"
import { ContactSection } from "@/components/sections/contact-section"

const storyContent = {
    quote: "Wij geloven dat een buitenruimte geen nagedachte toevoeging is, maar een essentieel onderdeel van uw leefomgeving.",
    paragraphs: [
        "ES Systems is actief sinds 2018 met een duidelijke missie: aluminium maatwerkoplossingen realiseren die technisch perfect zijn en tegelijk een esthetische meerwaarde bieden aan moderne architectuur.",
        "Dankzij onze eigen productie kunnen we een hoge en constante kwaliteit garanderen. We werken uitsluitend op maat en bieden geen standaardoplossingen aan. Elk project wordt tot in de kleinste details afgestemd op uw woning, zodat het resultaat perfect aansluit tot op de millimeter."
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
