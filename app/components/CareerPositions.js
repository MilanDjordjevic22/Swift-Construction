import React from 'react';
import Image from 'next/image';

const positions = [
  {
    image: '/position1.jpg',
    title: 'General Labourer',
    text: 'We’re looking for reliable, hard-working general labourers to support our exterior renovation projects. Duties include site prep, material handling, clean-up, and assisting skilled tradespeople as needed.',
  },
  {
    image: '/position2.jpg',
    title: 'Stucco Finishing Technician',
    text: 'Join our crew as a stucco and exterior finishing technician. In this role, you’ll apply stucco and help with other finishing tasks like patching, repairs, and prep work. Experience with trowels, mixers, and surface prep is a bonus, but we’re willing to train the right person.',
  },
  {
    image: '/position3.jpg',
    title: 'Siding Installer',
    text: 'We’re hiring experienced siding installers who are comfortable working with Hardie board and other exterior materials. You’ll be responsible for accurate installation, cutting, and finishing to ensure clean, professional results on both residential and commercial projects.',
  },
];

const CareerPositions = () => {
  return (
    <section className="py-20 px-4 bg-white text-black text-center">
      <h2 className="text-4xl font-serif font-semibold mb-16">Positions Available</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {positions.map((pos, index) => (
          <div key={index} className="flex flex-col items-center text-sm text-gray-700">
            <Image
              width={160}
              height={160}
              src={pos.image}
              alt={pos.title}
              className="w-40 h-40 object-cover rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-base font-semibold mb-2">{pos.title}</h3>
            <p className="max-w-xs">{pos.text}</p>
          </div>
        ))}
      </div>

      <button className="bg-[#D7AF4D] hover:bg-[#b98e32] text-white px-6 py-3 rounded-md text-sm font-medium transition">
        Email Us
      </button>
    </section>
  );
};

export default CareerPositions;
