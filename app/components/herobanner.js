import React from 'react';

const HeroBanner = ({ imageUrl }) => {
  return (
    <div
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl text-center px-4">
        <h1 className="text-[60px] font-serif font-bold text-white leading-none mb-1">
        Swift Construction
        </h1>
        <h2 className="text-[30px] font-light text-white mb-5 -mt-2">
        Your Trusted Exterior Experts
        </h2>

        <p className="text-base md:text-lg text-white mb-6">
        Our team specializes in exterior remodeling for both residential and commercial properties, delivering high-quality, turnkey solutions tailored to each project. We offer a full range of services including stucco application, Hardie board installation, professional painting, and expert stone masonry. With a focus on craftsmanship and reliability, you can count on us to handle all your construction and maintenance needs with precision and care.        </p>

        {/* Buttons */}
        <div className="flex gap-6 justify-center">
        <button className="bg-[#D7AF4D] hover:bg-[#b98e32] text-white font-mono px-8 py-4 rounded-xl text-[18px] mr-3">
                    Get A Quote
                </button>
          <button className="bg-[#D7AF4D] hover:bg-[#b98e32] text-white font-mono px-8 py-4 rounded-xl text-[18px] mr-3">
                    Our Services
                </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
