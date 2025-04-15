import React from 'react';
import Image from 'next/image'; 

const whyItems = [
  {
    title: 'Unmatched Craftsmanship & Durability',
    image: '/craftsmanship.jpg', // replace with your actual image in /public
    text: 'We take pride in delivering high-quality exterior construction that stands the test of time. Our skilled professionals use top-tier materials and precision craftsmanship to ensure durability, functionality, and aesthetic appeal in every project.',
  },
  {
    title: 'Customer-Centric Approach',
    image: '/customer-approach.jpg',
    text: 'Your satisfaction is our priority. We listen to your vision, provide expert recommendations, and maintain clear communication throughout the project. From concept to completion, we work closely with you to bring your exterior dreams to life on time and within budget.',
  },
  {
    title: 'Reliable & Efficient Service',
    image: '/efficient-service.jpg',
    text: 'We value your time and investment. Our team is committed to meeting deadlines, staying within budget, and exceeding expectations with efficient project management and transparent pricing. With us, you get quality work without unnecessary delays or hidden costs.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 bg-white text-black">
      <h2 className="text-4xl font-semibold text-center mb-16">Why Choose Us?</h2>
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {whyItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <Image
              width={500}
              height={500}
              src={item.image}
              alt={item.title}
              className="w-full md:w-[250px] h-[200px] object-cover rounded-lg shadow-lg"
            />
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-700">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
