import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Stucco',
    image: '/stucco.jpg',
    text: 'Stucco is a durable and low-maintenance exterior finish that adds both insulation and style to your home or building. We offer expert application and repairs for a clean, long-lasting look.',
  },
  {
    title: 'Hardie Siding',
    image: '/hardie.jpg',
    text: 'Hardie board siding is a strong, weather-resistant option that gives your property a modern, polished appearance. It’s built to withstand harsh climates while boosting curb appeal.',
  },
  {
    title: 'Painting',
    image: '/painting.jpg',
    text: 'A fresh coat of exterior paint can completely transform your property. We use high-quality materials and professional techniques to ensure a smooth, lasting finish.',
  },
  {
    title: 'Stone',
    image: '/stone.jpg',
    text: 'Stone masonry adds timeless beauty and character to any exterior. From decorative features to full facades, we craft detailed, durable stonework to elevate your space.',
  },
];

const ServicesProvided = () => {
  return (
    <section className="py-20 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <h2 className="text-4xl font-serif font-semibold text-center mb-16">Servcies Provided</h2>
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <Image
              width={500}
              height={500}
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
