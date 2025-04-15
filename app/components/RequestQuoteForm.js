import React, { useState } from 'react';

const RequestQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="quote" className="w-full bg-white py-12 px-4 flex justify-center items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-light text-center mb-4">Request Quote</h2>
        <p className="text-center mb-10">
          Please take a moment to fill out the form.
        </p>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-[1fr_2fr] gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm mb-1">Name *</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="border-2 border-[#A4792A] rounded-md px-3 py-1 focus:outline-none text-sm"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm mb-1">Email *</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="border-2 border-[#A4792A] rounded-md px-3 py-1 focus:outline-none text-sm"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm mb-1">Phone *</label>
              <input
                type="text"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="border-2 border-[#A4792A] rounded-md px-3 py-1 focus:outline-none text-sm"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col h-full">
            <label htmlFor="message" className="text-sm mb-1">Leave us a message...</label>
            <textarea
              name="message"
              id="message"
              rows="7"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-2 border-[#A4792A] rounded-md px-3 py-2 focus:outline-none resize-none text-sm h-full"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className=" w-full bg-[#A4792A] hover:bg-[#b98e32] text-white font-mono px-12 py-2 rounded-md text-sm transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RequestQuoteForm;
