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
      <div className="relative z-10 max-w-2xl bg-[#6B4F3B] bg-opacity-85 text-white p-10 rounded-md shadow-lg text-center px-10">
        <h1 className="text-6xl font-semibold mb-4">Careers</h1>
        <p className="text-[18px] mx-8">
        We&apos;re always looking to add motivated, hardworking individuals to our growing team. 
        Whether you're experienced in the trades or just getting started, we offer opportunities to learn, grow, and 
        be part of high-quality exterior renovation projects. Below are the current positions we&apos;re looking to fill.
        </p>
      </div>
    </div>
  );
};

export default CareersSection;
