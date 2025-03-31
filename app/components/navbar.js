"use client";

import { usePathname } from "next/navigation";
import { Phone, Mail, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    const pathname = usePathname();

    const linkStyle = "text-[18px]";
    const activeStyle = "underline";

    const navLinks = [
        { href: "/services", label: "Services" },
        { href: "/aboutUs", label: "About Us" },
        { href: "/faq", label: "FAQ" },
        { href: "/contact", label: "Contact" },
        { href: "/careers", label: "Careers" },
    ];

    return (
        <header className="font-navbar">
            {/* Top bar */}
            <div className="bg-[#644F41] text-white px-4 py-2 flex justify-between items-center text-sm">
                <div className="flex items-center gap-6 ml-3">
                    <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <span>403-383-2655</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <span>info@swiftconstructionltd.ca</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 mr-3">
                    <Facebook size={18} />
                    <Instagram size={18} />
                </div>
            </div>

            {/* Main navbar */}
            <nav className="bg-white px-4 py-1 flex justify-between items-center shadow-sm">
                {/* Logo */}
                <div>
                    <Link href="/">
                        <Image
                            src="/Swift Construction Logo.svg"
                            alt="Logo"
                            width={60}
                            height={60}
                        />
                    </Link>
                </div>

                {/* Nav links */}
                <ul className="hidden md:flex gap-20 text-black font-mono text-lg">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`${linkStyle} ${pathname === link.href ? activeStyle : ""}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Quote Button */}
                <button className="bg-[#D7AF4D] hover:bg-[#b98e32] text-white font-mono px-4 py-2 rounded-xl text-sm mr-3">
                    Get A Quote
                </button>
            </nav>
        </header>
    );
}
