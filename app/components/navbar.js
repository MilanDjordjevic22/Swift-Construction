"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, Mail, Facebook, Instagram, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
      {/* Top Bar */}
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
          <a href="https://www.facebook.com/p/Swift-Construction-Ltd-100063935049998/?locale=en_GB" className="hover:text-[#A4792A]">
            <Facebook size={18} />
          </a>
          <a href="https://www.instagram.com/swift_construction.ltd/" className="hover:text-[#A4792A]">
            <Instagram size={18} />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white px-4 py-1 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src="/Swift Construction Logo.svg"
                alt="Swift Construction Logo"
                width={60}
                height={60}
              />
            </Link>
          </div>

          {/* Desktop Links */}
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
          <Link href="#quote" scroll={true}>
            <button className="hidden md:block bg-[#A4792A] hover:bg-[#b98e32] text-white font-mono px-6 py-2 rounded-xl text-sm mr-3">
              Get A Quote
            </button>
          </Link>

          {/* Mobile Menu Icon */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-black">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-3 px-4 pb-4 space-y-3 bg-white shadow-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block text-black font-mono text-lg ${pathname === link.href ? activeStyle : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="#quote" scroll={true}>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-full mt-3 bg-[#A4792A] hover:bg-[#b98e32] text-white font-mono px-4 py-2 rounded-xl text-sm"
              >
                Get A Quote
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
