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
    // You can integrate with an API or backend here
  };

  return (
    <section className="w-full bg-white py-12 px-4 flex justify-center items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-serif text-center font-semibold mb-2">Request Quote</h2>
        <p className="text-center text-gray-600 mb-8">
          Please take a moment to fill out the form.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              className="border border-yellow-700 rounded-md px-4 py-2 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className="border border-yellow-700 rounded-md px-4 py-2 focus:outline-none"
            />
            <input
              type="text"
              name="phone"
              required
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              className="border border-yellow-700 rounded-md px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Right Column */}
          <div>
            <textarea
              name="message"
              placeholder="Leave us a message..."
              rows="7"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-yellow-700 rounded-md px-4 py-2 focus:outline-none resize-none"
            />
          </div>

          {/* Full Width Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-[#D7AF4D] hover:bg-[#b98e32] text-white font-mono px-8 py-2 rounded-xl text-sm"
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
