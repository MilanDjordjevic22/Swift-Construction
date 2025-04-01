import React from 'react';

const CareersSection = ({ imageUrl }) => {
  return (
    <div
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Center Box */}
      <div className="relative z-10 max-w-2xl bg-[#6B4F3B] bg-opacity-95 text-white p-10 rounded-md shadow-lg text-center">
        <h1 className="text-6xl font-serif font-semibold mb-4">Careers</h1>
        <p className="text-sm md:text-base leading-relaxed">
          We’re always on the lookout for skilled, passionate professionals to join our team. 
          If you're someone who values craftsmanship, reliability, and teamwork, we’d love to hear from you. 
          Explore our current openings or reach out to learn how you can grow with Swift Construction.
        </p>
      </div>
    </div>
  );
};

export default CareersSection;
