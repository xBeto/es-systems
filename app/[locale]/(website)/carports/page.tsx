"use client"

import { PageWrapper } from "@/components/layout"
import { ProductHero, ProductHeroImage, ProductDetails, ImageGallery } from "@/components/product"
import { ContactSection } from "@/components/sections/contact-section"
import { useTranslations } from "next-intl"

const galleryImages = [
    { src: "carport-1.jpeg", alt: "Carport project 1" },
    { src: "carport-2.jpeg", alt: "Carport project 2" },
    { src: "carport-3.jpeg", alt: "Carport project 3" },
]

export default function CarportsPage() {
    const t = useTranslations("Carports")

    const specs = [
        { label: t("labels.construction"), value: t("specs.construction") },
        { label: t("labels.roofType"), value: t("specs.roofType") },
        { label: t("labels.finish"), value: t("specs.finish") },
        { label: t("labels.extras"), value: t("specs.extras") },
    ]

    return (
        <PageWrapper>
            <ProductHero
                title={<span dangerouslySetInnerHTML={{ __html: t("hero.title") }} />}
                description={t("hero.description")}
            />

            <ProductHeroImage
                src="/CARPORT-HERO.jpeg"
                alt="Carport Hero"
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
                layout="hero-landscape"
            />

            <ContactSection />
        </PageWrapper>
    )
}
