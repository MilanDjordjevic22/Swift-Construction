import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Help = () => {
  return (
    <section className="py-20 px-4 bg-white text-black text-center">
      {/* Heading */}
      <h2 className="text-4xl font-serif font-semibold mb-6">Need Help?</h2>

      {/* Paragraph (narrow) */}
      <p className="text-sm max-w-xl mx-auto mb-12 text-gray-700">
      Need to get in touch? Call or text us at the number or email below or check out our FAQ for quick answers to common questions. We&#39;re here to help!{' '}
        <a
          href="mailto:info@swiftconstructionltd.ca"
          className="text-blue-600 underline"
        >
          Click here to ask any quick questions or schedule a quote.
        </a>
      </p>

      {/* Contact Info (wider) */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start text-sm px-4 md:px-0 gap-12 md:gap-0">
        {/* Phone */}
        <div className="flex flex-col items-center">
          <FaPhoneAlt className="text-xl mb-2" />
          <p className="font-semibold">Call or text us</p>
          <p>403-561-1931</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-xl mb-2" />
          <p className="font-semibold">Email us</p>
          <a
            href="mailto:swiftconstruction.exteriors@outlook.com"
            className="hover:underline"
          >
            swiftconstruction.exteriors@outlook.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Help;
