import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const accordionData = [
  {
    question: 'What services do you offer?',
    answer: 'We specialize in exterior renovations, including siding, painting, decks, and more.',
  },
  {
    question: 'How do I request a quote?',
    answer: 'Simply click the "Get A Quote" button and fill out the form. We’ll get back to you shortly!',
  },
  {
    question: 'Do you offer commercial services?',
    answer: 'Yes, we handle both residential and commercial projects with dedicated crews for each.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Most projects take 1-3 weeks depending on scope, materials, and weather conditions.',
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      {accordionData.map((item, index) => (
        <div key={index} className="mb-4 border border-yellow-600 rounded">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center px-4 py-3 bg-[#D7AF4D] hover:bg-[#b98e32] text-white text-sm font-medium rounded"
          >
            {item.question}
            {openIndex === index ? <FaMinus /> : <FaPlus />}
          </button>

          {openIndex === index && (
            <div className="bg-white text-black text-sm px-4 py-3 transition-all duration-200 ease-in-out">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
