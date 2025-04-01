import React from 'react';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#644F41] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left: Services */}
        <div className="flex items-start gap-4">
        <img
            src="/Swift Construction Logo.svg" // replace with your actual image path in public/
            alt="Building Icon"
            width={150}
            height={150}
        />
          <div>
            <h3 className="font-semibold text-lg mb-2">Our Services</h3>
            <ul className="text-sm space-y-1">
              <li>▸ Siding</li>
              <li>▸ Exterior Detailing</li>
              <li>▸ Painting</li>
              <li>▸ Decks</li>
            </ul>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <ul className="text-sm space-y-1 mb-4">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-sm" />
              <span>587-586-1996</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-sm" />
              <span>swiftconstruction.exteriors@outlook.com</span>
            </li>
          </ul>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
