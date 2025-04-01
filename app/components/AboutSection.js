import React from 'react';

const AboutSection = ({ imageUrl }) => {
  return (
    <div
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Center Box */}
      <div className="relative z-10 max-w-2xl bg-[#6B4F3B] bg-opacity-95 text-white p-10 rounded-md shadow-lg text-center">
        <h1 className="text-6xl font-serif font-semibold mb-4">About Us</h1>
        <p className="text-sm md:text-base leading-relaxed">
          We’re a Calgary-based exterior renovation and repair company with deep roots in the construction industry. Known for our quality work and reliable service, we're a fast-growing team always on the lookout for new projects and partnerships. Whether it’s residential or commercial, we bring experience, craftsmanship, and a commitment to excellence to every job.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
