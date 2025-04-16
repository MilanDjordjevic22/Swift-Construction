import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Help = () => {
  return (
    <section className="pt-20 pb-5 px-4 bg-white text-black text-center">
      {/* Heading */}
      <h2 className="text-4xl font-serif font-semibold mb-6 mt-6">Need Help?</h2>

      <p className=" max-w-xl mx-auto mb-6">
      Need to get in touch? Call or text us at the number or email below, or check out our FAQ for quick answers to common questions. We&#39;re here to help!{' '}
        
      </p>

      <a href="mailto:info@swiftconstructionltd.ca" className="text-grey-600 underline mb-6">
        Click here to ask any quick questions or schedule a quote.
      </a>

      {/* Contact Info*/}
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row justify-between items-start md:px-0 md:gap-0 mt-10">
        {/* Phone */}
        <div className="flex flex-col items-center">
          <FaPhoneAlt className="text-xl mb-2" />
          <p className="font-semibold">Call or text us</p>
          <p>403-561-1931</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center ml-1">
          <FaEnvelope className="text-xl mb-2" />
          <p className="font-semibold">Email us</p>
          <a
            href="mailto:info@swiftconstructionltd.ca"
            className="hover:underline"
          >
            info@swiftconstructionltd.ca
          </a>
        </div>
      </div>
    </section>
  );
};

export default Help;
