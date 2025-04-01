import React from 'react';

const services = [
  {
    title: 'Stucco',
    image: '/stucco.jpg',
    text: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'Hardie Siding',
    image: '/hardie.jpg',
    text: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'Painting',
    image: '/painting.jpg',
    text: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'Stone',
    image: '/stone.jpg',
    text: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
];

const ServicesProvided = () => {
  return (
    <section className="py-20 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full md:w-1/2 h-[250px] object-cover rounded-lg shadow"
            />

            {/* Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-serif font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesProvided;
