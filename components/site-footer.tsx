"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function SiteFooter() {
    return (
        <footer className="bg-background text-foreground pt-32 pb-12 border-t border-black/10">
            <div className="container mx-auto px-6 md:px-12">

                {/* Top: Big CTA */}
                <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end">
                    <h2 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black/10 select-none">
                        ES.
                    </h2>
                    <div className="mt-8 md:mt-0 max-w-md">
                        <h3 className="text-2xl font-medium mb-4">Klaar om uw droomproject te starten?</h3>
                        <p className="text-muted-foreground mb-8">
                            Neem contact op voor een vrijblijvend gesprek. Wij denken graag met u mee van ontwerp tot realisatie.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-3 border-b border-black pb-1 text-lg font-medium hover:opacity-60 transition-opacity"
                        >
                            Vraag Offerte <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Middle: Links */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-black/10 pt-16 mb-16">
                    <div>
                        <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                            Menu
                        </span>
                        <ul className="space-y-3">
                            <li><Link href="/" className="hover:underline">Home</Link></li>
                            <li><Link href="/over-ons" className="hover:underline">Over ons</Link></li>
                            <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
                            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                            Producten
                        </span>
                        <ul className="space-y-3">
                            <li><Link href="/terrasoverkappingen" className="hover:underline">Terrasoverkappingen</Link></li>
                            <li><Link href="/carports" className="hover:underline">Carports</Link></li>
                            <li><Link href="/schuifwanden" className="hover:underline">Glazen Schuifwanden</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                            Hoofdkantoor
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
                            Socials
                        </span>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 border border-black/10 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-all">FB</a>
                            <a href="#" className="w-10 h-10 border border-black/10 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-all">IN</a>
                            <a href="#" className="w-10 h-10 border border-black/10 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-all">LI</a>
                        </div>
                    </div>
                </div>

                {/* Bottom: Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground pt-8 border-t border-black/10">
                    <p>© {new Date().getFullYear()} ES Systems. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-black">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-black">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
