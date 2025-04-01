import React from 'react';

const positions = [
  {
    image: '/position1.jpg',
    text: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    image: '/position2.jpg',
    text: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    image: '/position3.jpg',
    text: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
];

const CareerPositions = () => {
  return (
    <section className="py-20 px-4 bg-white text-black text-center">
      <h2 className="text-4xl font-serif font-semibold mb-16">Positions Available</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {positions.map((pos, index) => (
          <div key={index} className="flex flex-col items-center text-sm text-gray-700">
            <img
              src={pos.image}
              alt={`Position ${index + 1}`}
              className="w-40 h-40 object-cover rounded-full mb-4 shadow-lg"
            />
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
