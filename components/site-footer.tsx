"use client"

import { Link, usePathname } from "@/i18n/routing"
import { ArrowRight } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"

export function SiteFooter() {
    const t = useTranslations("Footer")
    const pathname = usePathname()
    const locale = useLocale()

    return (
        <footer className="bg-background text-foreground pt-32 pb-12 border-t border-black/10">
            <div className="container mx-auto px-6 md:px-12">

                {/* Top: Big CTA */}
                <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end">
                    <h2 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black/10 select-none">
                        ES.
                    </h2>
                    <div className="mt-8 md:mt-0 max-w-md">
                        <h3 className="text-2xl font-medium mb-4">{t("readyToStart")}</h3>
                        <p className="text-muted-foreground mb-8">
                            {t("contactText")}
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-3 border-b border-black pb-1 text-lg font-medium hover:opacity-60 transition-opacity"
                        >
                            {t("requestQuote")} <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Middle: Links */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-black/10 pt-16 mb-16">
                    <div>
                        <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                            {t("menu")}
                        </span>
                        <ul className="space-y-3">
                            <li><Link href="/" className="hover:underline">{t("home")}</Link></li>
                            <li><Link href="/over-ons" className="hover:underline">{t("aboutUs")}</Link></li>
                            <li><Link href="/portfolio" className="hover:underline">{t("portfolio")}</Link></li>
                            <li><Link href="/#contact" className="hover:underline">{t("contact")}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                            {t("products")}
                        </span>
                        <ul className="space-y-3">
                            <li><Link href="/terrasoverkappingen" className="hover:underline">{t("terrasoverkappingen")}</Link></li>
                            <li><Link href="/carports" className="hover:underline">{t("carports")}</Link></li>
                            <li><Link href="/schuifwanden" className="hover:underline">{t("schuifwanden")}</Link></li>
                            <li><Link href="/gevelbekleding" className="hover:underline">{t("gevelbekleding")}</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                            {t("headquarters")}
                        </span>
                        <address className="not-italic text-sm leading-relaxed text-muted-foreground">
                            Brancardiershof 13<br />
                            3550 Heusden-Zolder<br />
                            BTW: BE 069 79 73 594<br /><br />
                            <a href="mailto:info@essystems.be" className="text-foreground hover:underline">info@essystems.be</a><br />
                            <a href="tel:+32470101212" className="text-foreground hover:underline">+32 470 10 12 12</a>
                        </address>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                            {t("socials")}
                        </span>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/E.S.Systems.Terrasoverkappingen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-black/10 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-all">FB</a>
                            <a href="https://www.instagram.com/es_systems_terrasoverkappingen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-black/10 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-all">IN</a>
                        </div>
                    </div>
                </div>

                {/* Bottom: Copyright & Legal & Language */}
                <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-muted-foreground pt-8 border-t border-black/10 gap-6 lg:gap-0">
                    <p>© {new Date().getFullYear()} ES Systems. {t("allRightsReserved")}</p>
                    <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
                        <Link href="/privacy" className="hover:text-black">{t("privacyPolicy")}</Link>
                        <Link href="/terms" className="hover:text-black">{t("terms")}</Link>
                        <Link href="/sales-and-delivery-terms" className="hover:text-black">{t("deliveryTerms")}</Link>
                        
                        {/* Language Selector */}
                        <div className="flex items-center gap-3 border-l border-black/20 pl-4 lg:pl-6 ml-2">
                            <Link href={pathname} locale="nl" className={`hover:text-black transition-colors ${locale === 'nl' ? 'text-black font-medium' : ''}`}>NL</Link>
                            <span>|</span>
                            <Link href={pathname} locale="en" className={`hover:text-black transition-colors ${locale === 'en' ? 'text-black font-medium' : ''}`}>EN</Link>
                            <span>|</span>
                            <Link href={pathname} locale="de" className={`hover:text-black transition-colors ${locale === 'de' ? 'text-black font-medium' : ''}`}>DE</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}