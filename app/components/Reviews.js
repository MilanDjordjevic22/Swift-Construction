import React from 'react';
import Image from 'next/image';


const reviews = [
  {
    name: 'Karen L, Calgary Homeowner',
    text: '“We hired this team for a full exterior makeover, including stucco and Hardie board installation, and we couldn’t be happier with the results. They were professional, efficient, and the final product looks amazing. Highly recommend!”',
    image: '/review1.jpg',
  },
  {
    name: 'James R, Business Owner',
    text: '“Great experience from start to finish. They handled stone masonry and exterior painting for our commercial building, and the quality of work was top-notch. Communication was clear throughout the project. Will definitely be working with them again.”',
    image: '/review2.jpg',
  },
  {
    name: 'Melissa T, Home Renovation Client',
    text: '“These guys know their stuff. Fast, friendly, and super detail-oriented. They fixed up some damaged stucco on our house and matched the texture perfectly. It looks brand new!”',
    image: '/review3.jpg',
  },
];

const Reviews = () => {
  return (
    <section className="py-20 px-4 bg-white text-black">
      <h2 className="text-4xl font-serif font-semibold text-center mb-16">
        Words from our clients
      </h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border text-center flex flex-col items-center"
          >
            <Image
              width={160}
              height={160}
              src={review.image}
              alt={review.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{review.name}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
