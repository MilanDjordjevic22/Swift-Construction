import React from 'react';

const FaqSection = ({ imageUrl }) => {
  return (
    <div
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Center Box */}
      <div
        className="relative z-10 max-w-2xl text-white p-10 rounded-md shadow-lg text-center"
        style={{ backgroundColor: 'rgba(107, 79, 59, 0.9)' }}
      >
        <h1 className="text-6xl font-semibold mb-4">FAQ</h1>
        <p className="text-[18px] mx-8">
        Have questions? Check out our FAQ below for quick answers to some of the most common things we&apos;re asked about our services, process, and what to expect.
        </p>
      </div>
    </div>
  );
};

export default FaqSection;
