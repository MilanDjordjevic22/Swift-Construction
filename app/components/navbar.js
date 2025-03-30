"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { Phone, Mail, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


export default function NavBar() {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState(pathname); 

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const defaultLink = "text-[22px]";
    const activeStyle = "underline";

    return (
        <header>
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
            <Image
                src="/Swift Construction Logo.svg" // Replace with your image path
                alt="Logo"
                width={60}
                height={60}
            />
            </div>

            {/* Nav links */}
            <ul className="hidden md:flex gap-20 text-black font-mono text-lg">
            <li><Link href="#">Services</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">Careers</Link></li>
            </ul>

            {/* Quote Button */}
            <button className="bg-[#D7AF4D] hover:bg-[#b98e32] text-white font-mono px-4 py-2 rounded-xl text-sm mr-3">
            Get A Quote
            </button>
        </nav>
        </header>
    );
}