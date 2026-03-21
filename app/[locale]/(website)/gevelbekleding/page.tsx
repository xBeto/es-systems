"use client"

import { PageWrapper } from "@/components/layout"
import { ProductHero, ProductHeroImage, ProductDetails, ImageGallery } from "@/components/product"
import { ContactSection } from "@/components/sections/contact-section"
import { useTranslations } from "next-intl"

const galleryImages = [
    { src: "gevelbekleding-1.png", alt: "Gevelbekleding project 1" },
    { src: "gevelbekleding-2.webp", alt: "Gevelbekleding project 2" },
    { src: "gevelbekleding-3.webp", alt: "Gevelbekleding project 3" },
]

export default function GevelbekledingPage() {
    const t = useTranslations("Gevelbekleding")
    
    const specs = [
        { label: t("labels.material"), value: t("specs.material") },
        { label: t("labels.finish"), value: t("specs.finish") },
        { label: t("labels.mounting"), value: t("specs.mounting") },
        { label: t("labels.durability"), value: t("specs.durability") },
    ]

    return (
        <PageWrapper>
            <ProductHero
                title={<span dangerouslySetInnerHTML={{ __html: t("hero.title") }} />}
                description={t("hero.description")}
            />

            <ProductHeroImage
                src="/GEVELBEKLEDING-HERO.webp"
                alt="Aluminium Gevelbekleding Hero"
            />

            <ProductDetails
                specsTitle={t("details.specsTitle")}
                specs={specs}
                contentTitle={t("details.contentTitle")}
                content={
                    <>
                        <p className="mb-6">
                            {t("details.p1")}
                        </p>
                        <p>
                            {t("details.p2")}
                        </p>
                    </>
                }
            />

            <ImageGallery
                title={t("galleryTitle")}
                images={galleryImages}
                layout="asymmetric-2col"
            />

            <ContactSection />
        </PageWrapper>
    )
}
