import React, { useState } from "react";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    to: "",
    from: "",
    travelDate: "",
    adults: "1",
    name: "",
    phone: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        to: "",
        from: "",
        travelDate: "",
        adults: "1",
        name: "",
        phone: "",
        email: ""
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="flex justify-center items-center w-full min-h-[80vh] bg-gradient-to-r from-blue-200 via-white to-orange-100">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full text-center">
          <div className="text-green-500 text-7xl mb-6">✓</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 text-lg">
            We'll contact you soon with your quote.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-blue-100 via-orange-50 to-blue-50 py-20 px-6">
      
      <div className="animate-fadeIn bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-4xl p-12 sm:p-16 border border-gray-100">
        
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl mb-10 shadow-md p-10">
          <h2 className="text-white text-3xl font-bold tracking-wide text-center py-20 px-10">
            Fill the Form to Get Free Quote
          </h2>
        </div>

        
        <div className="flex flex-col gap-10 space-y-7 p-5">
          <input
            type="text"
            name="to"
            value={formData.to}
            onChange={handleChange}
            placeholder="Going To (where are you going?)"
            className="w-full border border-gray-300 rounded-xl px-6 py-4 m-5 text-gray-700 text-lg focus:border-blue-500 focus:ring focus:ring-blue-100 focus:outline-none"
          />
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            placeholder="Going From (from which city?)"
            className="w-full border border-gray-300 rounded-xl px-6 py-4 text-gray-700 text-lg focus:border-blue-500 focus:ring focus:ring-blue-100 focus:outline-none"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-6 py-4 text-gray-700 text-lg focus:border-blue-500 focus:ring focus:ring-blue-100 focus:outline-none"
            />
            <select
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-6 py-4 text-gray-700 text-lg focus:border-blue-500 focus:ring focus:ring-blue-100 focus:outline-none"
            >
              <option value="1">No. of adults - 1</option>
              <option value="2">No. of adults - 2</option>
              <option value="3">No. of adults - 3</option>
              <option value="4">No. of adults - 4</option>
              <option value="5+">No. of adults - 5+</option>
            </select>
          </div>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full border border-gray-300 rounded-xl px-6 py-4 text-gray-700 text-lg focus:border-blue-500 focus:ring focus:ring-blue-100 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter number"
            className="w-full border border-gray-300 rounded-xl px-6 py-4 text-gray-700 text-lg focus:border-blue-500 focus:ring focus:ring-blue-100 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full border border-gray-300 rounded-xl px-6 py-4 text-gray-700 text-lg focus:border-blue-500 focus:ring focus:ring-blue-100 focus:outline-none"
          />

          
          <div className="flex justify-center pt-6">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg px-20 py-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;

