import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For demo, just simulate submission
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-yellow-50">
      <h2 className="text-4xl font-playfair font-bold text-center text-[#4B2E0E] mb-12">
        Contact Us
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8 text-[#4B2E0E]">
          <div className="flex items-center space-x-4">
            <FiMapPin className="w-6 h-6 text-yellow-500" />
            <p>123 Coffee Street, Bean Town, USA</p>
          </div>
          <div className="flex items-center space-x-4">
            <FiPhone className="w-6 h-6 text-yellow-500" />
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center space-x-4">
            <FiMail className="w-6 h-6 text-yellow-500" />
            <p>contact@coffeecafe.com</p>
          </div>
          <p className="text-[#6B4E16]">
            We’d love to hear from you! Whether you have questions, feedback, or want to place a special order, reach out to us.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg flex flex-col space-y-6"
          noValidate
        >
          {submitted && (
            <p className="text-green-600 font-semibold text-center">
              Thank you for your message! We'll get back to you soon.
            </p>
          )}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="border border-yellow-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border border-yellow-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="border border-yellow-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
          />
          <button
            type="submit"
            className="bg-[#4B2E0E] text-yellow-300 font-semibold py-3 rounded-lg hover:bg-yellow-400 hover:text-[#4B2E0E] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
