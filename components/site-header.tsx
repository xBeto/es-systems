"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
    { name: "Terrasoverkappingen", href: "/terrasoverkappingen" },
    { name: "Carports", href: "/carports" },
    { name: "Schuifwanden", href: "/schuifwanden" },
    { name: "Gevelbekleding", href: "/gevelbekleding" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Over Ons", href: "/over-ons" },
]

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out mix-blend-difference text-white ${isScrolled ? "py-4" : "py-8"
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Logo - Minimalist Wordmark */}
                    <Link href="/" className="z-50 relative group">
                        <span className="text-xl font-bold tracking-tighter uppercase">
                            ES Systems
                            <span className="w-1.5 h-1.5 bg-white inline-block ml-1 rounded-full group-hover:scale-0 transition-transform duration-300" />
                        </span>
                    </Link>

                    {/* Desktop Nav - Clean Line */}
                    <nav className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium uppercase tracking-widest hover:opacity-100 opacity-60 transition-opacity"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            className="px-6 py-2 border border-white/30 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium uppercase tracking-widest"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden z-50 p-2 hover:opacity-70 transition-opacity"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Full Screen Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#121212] z-40 transition-transform duration-500 ease-[0.87,0,0.13,1] ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="h-full flex flex-col justify-center px-6 md:px-12">
                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-4xl md:text-6xl font-normal text-white hover:text-[#666666] transition-colors tracking-tight"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-8 text-xl text-white opacity-60 uppercase tracking-widest"
                        >
                            Start een Project &rarr;
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}
