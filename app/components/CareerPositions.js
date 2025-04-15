import React from 'react';

const positions = [
  {
    image: '/position1.jpg',
    title: 'General Labourer',
    text: 'We’re looking for reliable, hard-working general labourers to support our exterior renovation projects. Duties include site prep, material handling, clean-up, and assisting skilled tradespeople as needed.',
  },
  {
    image: '/position2.jpg',
    title: 'Office Assistant',
    text: 'Join our team as an office assistant and be the first point of contact for clients and crew. In this role, you’ll handle calls, scheduling, file management, and general administrative support. Strong communication and organizational skills are key, and we’re happy to train the right person.',
  },
  {
    image: '/position3.jpg',
    title: 'Painter',
    text: 'We’re hiring experienced painters who are skilled in exterior and interior painting for both residential and commercial projects. You’ll be responsible for surface preparation, precise application, and finishing work to ensure clean, professional results that meet our quality standards.',
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
