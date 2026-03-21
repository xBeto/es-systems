"use client"

import { PageWrapper } from "@/components/layout"
import { ProductHero, ProductHeroImage, ProductDetails, ImageGallery } from "@/components/product"
import { ContactSection } from "@/components/sections/contact-section"
import { useTranslations } from "next-intl"

const galleryImages = [
    { src: "terrasoverkapping-1.jpg", alt: "Terrasoverkapping project 1" },
    { src: "terrasoverkapping-3.jpg", alt: "Terrasoverkapping project 2" },
    { src: "terrasoverkapping-2.webp", alt: "Terrasoverkapping project 3" },
]

export default function TerrasoverkappingenPage() {
    const t = useTranslations("Terrasoverkappingen")

    const specs = [
        { label: t("labels.material"), value: t("specs.material") },
        { label: t("labels.roofing"), value: t("specs.roofing") },
        { label: t("labels.span"), value: t("specs.span") },
        { label: t("labels.warranty"), value: t("specs.warranty") },
    ]

    return (
        <PageWrapper>
            <ProductHero
                title={<span dangerouslySetInnerHTML={{ __html: t("hero.title") }} />}
                description={t("hero.description")}
            />

            <ProductHeroImage
                src="/TERRASOVERKAPPING-HERO.jpg"
                alt="Terrasoverkapping Hero"
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
