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

import { usePathname } from "next/navigation"

export function SiteHeader() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isHero, setIsHero] = useState(true)

    const isHome = pathname === "/"

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            setIsScrolled(scrollY > 50)
            if (typeof window !== "undefined") {
                setIsHero(scrollY < (window.innerHeight - 50))
            }
        }
        window.addEventListener("scroll", handleScroll)
        // Initial check
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const useBlackHeader = isHome && isHero && !isMenuOpen

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${isScrolled ? "py-4" : "py-8"} ${useBlackHeader ? "text-black mix-blend-normal" : "text-white mix-blend-exclusion"
                    }`}
            >
                <div className="container mx-auto px-4 md:px-0 flex items-center justify-between">
                    {/* Logo - Recreated Brand Mark */}
                    <Link href="/" className="z-50 relative group flex items-center gap-0">
                        <span
                            className={`inline-flex items-center justify-center px-[0.3em] py-[0.25em] rounded-[0.25em] mr-[0.15rem] text-xl font-bold tracking-tighter leading-none ${useBlackHeader
                                ? "bg-black text-white"
                                : "bg-white text-black"
                                }`}
                        >
                            ES
                        </span>
                        <span className="text-xl font-bold tracking-tighter leading-none">
                            SYSTEMS
                        </span>
                    </Link>

                    {/* Desktop Nav - Clean Line */}
                    <nav className="hidden lg:flex items-center lg:gap-2.5 xl:gap-12">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`)
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative text-sm font-bold uppercase tracking-widest transition-all duration-300
                                    ${useBlackHeader ? "backdrop-blur-xs" : ""}
                                    after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-current
                                    after:content-[''] after:transition-transform after:duration-300 after:ease-in-out after:origin-left
                                    ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}
                                    `}
                                >
                                    {link.name}
                                </Link>
                            )
                        })}
                        <Link
                            href="/#contact"
                            className={`group relative px-6 py-2 border border-current overflow-hidden text-sm font-medium uppercase tracking-widest
                                before:absolute before:inset-0 before:pointer-events-none
                                before:[clip-path:circle(0%_at_50%_50%)] hover:before:[clip-path:circle(150%_at_50%_50%)]
                                before:transition-[clip-path] before:duration-500 before:ease-[cubic-bezier(0.4,0,0.2,1)]
                                ${useBlackHeader ? "before:bg-black hover:text-white hover:border-black" : "before:bg-white hover:text-black"}
                                transition-colors duration-300
                            `}
                        >
                            <span className="relative z-10">Contact</span>
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
