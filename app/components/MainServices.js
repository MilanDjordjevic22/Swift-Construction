import React from 'react';

const MainServices = ({ imageUrl }) => {
  return (
    <div
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Center Box */}
      <div className="relative z-10 max-w-2xl bg-[#6B4F3B] bg-opacity-95 text-white p-10 rounded-md shadow-lg text-center">
        <h1 className="text-6xl font-serif font-semibold mb-4">Services</h1>
        <p className="text-[18px] mx-8">
        At Swift Construction, we offer a wide range of high-quality exterior services designed to enhance and protect your property. 
        Whether you&apos;re looking to refresh your home&apos;s appearance or upgrade your commercial building, our team brings expertise, reliability, and 
        craftsmanship to every project. Explore our core services below to see how we can help bring your vision to life.
        </p>
      </div>
    </div>
  );
};

export default MainServices;
