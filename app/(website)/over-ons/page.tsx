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
    { src: "/BEURS-ESSYSTEMS.jpeg", alt: "Beurs Polyclose" },
    { src: "/ESSYSTEMS.jpeg", alt: "ESSYSTEMS" },
    { src: "/glazenschuifwand-1.jpg", alt: "Glazenschuifwand" },
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
