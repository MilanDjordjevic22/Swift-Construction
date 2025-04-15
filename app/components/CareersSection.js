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
      <div
        className="relative z-10 max-w-2xl text-white p-10 rounded-md shadow-lg text-center px-10"
        style={{ backgroundColor: 'rgba(107, 79, 59, 0.9)' }}
      >
        <h1 className="text-6xl font-semibold mb-4">Careers</h1>
        <p className="text-[18px] mx-8">
          We’re always looking to add motivated, hardworking individuals to our growing team. 
          Whether you're experienced in the trades or just getting started, we offer opportunities to learn, grow, and 
          be part of high-quality exterior renovation projects. Below are the current positions we’re looking to fill.
        </p>
      </div>
    </div>
  );
};

export default CareersSection;
