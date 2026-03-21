"use client"

import { PageWrapper } from "@/components/layout"
import { ProductHero, ProductHeroImage, ProductDetails, ImageGallery } from "@/components/product"
import { ContactSection } from "@/components/sections/contact-section"
import { useTranslations } from "next-intl"

const galleryImages = [
    { src: "glazenschuifwand-1.jpg", alt: "Schuifwanden project 1" },
    { src: "glazenschuifwand-2.jpg", alt: "Schuifwanden project 2" },
    { src: "glazenschuifwand-3.jpg", alt: "Schuifwanden project 3" },
]

export default function SchuifwandenPage() {
    const t = useTranslations("Schuifwanden")
    
    const specs = [
        { label: t("labels.thickness"), value: t("specs.thickness") },
        { label: t("labels.system"), value: t("specs.system") },
        { label: t("labels.profiles"), value: t("specs.profiles") },
        { label: t("labels.options"), value: t("specs.options") },
    ]

    return (
        <PageWrapper>
            <ProductHero
                title={<span dangerouslySetInnerHTML={{ __html: t("hero.title") }} />}
                description={t("hero.description")}
            />

            <ProductHeroImage
                src="/SCHUIFWANDEN-HERO.jpeg"
                alt="Schuifwanden Hero"
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
                layout="mix-60-40"
            />

            <ContactSection />
        </PageWrapper>
    )
}
