import React from 'react';

const reviews = [
  {
    name: 'Julius Christenson',
    text: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/review1.jpg',
  },
  {
    name: 'Honey Minch',
    text: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/review2.jpg',
  },
  {
    name: 'Wesker Welsher',
    text: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
            <img
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
