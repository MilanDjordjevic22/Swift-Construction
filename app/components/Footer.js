import React from 'react';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {

  const navLinks = [
    { href: "/services", label: "Our Services" }
  ];

  return (
    <footer className="bg-[#644F41] text-white py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:gap-[500px] gap-6">
    
    {/* Left: Services */}
    <div className="flex items-start gap-[50px]">
      <Link href="/">
        <Image
          src="/Swift Construction Logo.svg" 
          alt="Building Icon for Swift Construction Ltd" 
          width={150}
          height={150}
        />
      </Link>
      <div>
        {navLinks.map((link) => (
          <li key={link.href} className="list-none">
          <Link
            href={link.href}
            className="font-semibold text-[26px] mb-2"
            >
            {link.label}
          </Link>
          </li>
        ))}
        <ul className="text-sm space-y-1 text-[14px]">
          <li>Siding</li>
          <li>Exterior Detailing</li>
          <li>Painting</li>
          <li>Decks</li>
        </ul>
      </div>
    </div>

    {/* Right: Contact Info */}
    <div>
      <h3 id="contact-us-footer" className="font-semibold text-[26px] mb-2">Contact Us</h3>
      <ul className="text-[14px] space-y-1 mb-4">
        <li className="flex items-center gap-2">
          <FaPhoneAlt />
          <span className="font-normal">403-383-2655</span>
        </li>
        <li className="flex items-center gap-2">
          <FaEnvelope />
          <span className="font-normal">info@swiftconstructionltd.ca</span>
        </li>
      </ul>
      <div className="flex gap-4 text-xl">
        <a href="https://www.facebook.com/p/Swift-Construction-Ltd-100063935049998/?locale=en_GB" className="hover:text-[#A4792A]">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/swift_construction.ltd/" className="hover:text-[#A4792A]">
          <FaInstagram />
        </a>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
