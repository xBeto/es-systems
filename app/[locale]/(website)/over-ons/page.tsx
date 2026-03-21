"use client"

import { PageWrapper } from "@/components/layout"
import { PageHero } from "@/components/ui"
import { StorySection, AtelierImages, ValuesSection } from "@/components/blocks"
import { ContactSection } from "@/components/sections/contact-section"
import { useTranslations } from "next-intl"

const atelierImages = [
    { src: "/BEURS-ESSYSTEMS.jpeg", alt: "Beurs Polyclose" },
    { src: "/ESSYSTEMS.jpeg", alt: "ESSYSTEMS" },
    { src: "/glazenschuifwand-1.jpg", alt: "Glazenschuifwand" },
]

export default function OverOnsPage() {
    const t = useTranslations("OverOns")

    const storyContent = {
        quote: t("story.quote"),
        paragraphs: [
            t("story.p1"),
            t("story.p2")
        ]
    }

    const values = [
        {
            number: "01",
            title: t("values.v1.title"),
            description: t("values.v1.description")
        },
        {
            number: "02",
            title: t("values.v2.title"),
            description: t("values.v2.description")
        },
        {
            number: "03",
            title: t("values.v3.title"),
            description: t("values.v3.description")
        },
    ]
    return (
        <PageWrapper>
            <PageHero
                label={t("hero.label")}
                title={<span dangerouslySetInnerHTML={{ __html: t("hero.title") }} />}
                borderBottom
            />
            <StorySection {...storyContent} />
            <AtelierImages images={atelierImages} grayscale />
            <ValuesSection values={values} />
            <ContactSection />
        </PageWrapper>
    )
}
