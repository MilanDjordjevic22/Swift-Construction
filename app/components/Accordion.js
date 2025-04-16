import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const accordionData = [
  {
    question: 'What services do you offer?',
    answer: 'We specialize in stucco, Hardie board installation, exterior painting, and stone masonry for both residential and commercial properties.',
  },
  {
    question: 'Do you provide free estimates?',
    answer: 'Yes! We’re happy to provide a free, no-obligation estimate for your project.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. We’re fully licensed and insured for all the work we do.',
  },
  {
    question: 'How soon can you start a project?',
    answer: 'Start times vary depending on the season and scope of the project, but we always aim to begin as soon as possible. Contact us to check availability.',
  },
  {
    question: 'Do you work year-round?',
    answer: 'Yes, we operate year-round and adjust our workflow to fit the weather conditions in Calgary.',
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl w-full mx-auto pt-20 pb-5">
      <h2 className="text-4xl text-center mb-10 font-semibold">Frequently Asked Questions</h2>
      {accordionData.map((item, index) => (
        <div key={index} className="mb-4 border border-[#A4792A] rounded">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center px-8 py-4 bg-[#A4792A] hover:bg-[#b98e32] text-white text-sm font-medium rounded"
          >
            {item.question}
            {openIndex === index ? <FaMinus /> : <FaPlus />}
          </button>

          {openIndex === index && (
            <div className="bg-white text-black text-sm px-8 py-4 transition-all duration-200 ease-in-out rounded">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
