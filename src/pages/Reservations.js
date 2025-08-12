import React, { useState } from "react";

export default function Reservations() {
  const [formData, setFormData] = useState({
    tableSize: "",
    email: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.tableSize) newErrors.tableSize = "Please select a table size.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.date) newErrors.date = "Please select a date.";
    if (!formData.time) newErrors.time = "Please select a time.";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined })); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Reset form or handle submission logic here
      setFormData({
        tableSize: "",
        email: "",
        date: "",
        time: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-6">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
        <h1 className="text-yellow-700 text-3xl font-bold mb-8 text-center">
          Reserve Your Table
        </h1>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
            Thank you! Your reservation has been submitted.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Table Size */}
        <label
        htmlFor="tableSize"
        className="block text-yellow-700 font-semibold mb-2"
        >
        Table Size
        </label>

        <div className="relative">
        <select
            id="tableSize"
            name="tableSize"
            value={formData.tableSize}
            onChange={handleChange}
            className={`appearance-none w-full p-3 pr-10 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
            errors.tableSize ? "border-red-500" : "border-yellow-300"
            }`}
        >
            <option value="" disabled>
            Select number of people
            </option>
            <option value="2">2 people</option>
            <option value="4">4 people</option>
            <option value="6">6 people</option>
            <option value="8">8 people</option>
        </select>
        {/* Custom arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
            className="w-5 h-5 text-yellow-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>
        </div>
        {errors.tableSize && (
        <p className="text-red-600 text-sm mt-1 mb-4">{errors.tableSize}</p>
        )}

          {/* Email */}
          <label
            htmlFor="email"
            className="block text-yellow-700 font-semibold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              errors.email ? "border-red-500" : "border-yellow-300"
            }`}
            required
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1 mb-4">{errors.email}</p>
          )}

          {/* Date */}
          <label
            htmlFor="date"
            className="block text-yellow-700 font-semibold mb-2"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            min={new Date().toISOString().split("T")[0]}
            value={formData.date}
            onChange={handleChange}
            className={`w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              errors.date ? "border-red-500" : "border-yellow-300"
            }`}
            required
          />
          {errors.date && (
            <p className="text-red-600 text-sm mt-1 mb-4">{errors.date}</p>
          )}

          {/* Time */}
          <label
            htmlFor="time"
            className="block text-yellow-700 font-semibold mb-2"
          >
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={`w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              errors.time ? "border-red-500" : "border-yellow-300"
            }`}
            required
          />
          {errors.time && (
            <p className="text-red-600 text-sm mt-1 mb-4">{errors.time}</p>
          )}

          <button
            type="submit"
            className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded shadow"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}
