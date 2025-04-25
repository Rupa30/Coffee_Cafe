import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Alice Smith",
    text: "The best coffee I've ever had! The atmosphere is cozy, and the staff are incredibly friendly.",
  },
  {
    id: 2,
    name: "Bob Johnson",
    text: "Great place to work or relax. Their lattes are amazing, and the pastries are always fresh.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-4xl font-merriweather font-extrabold text-center text-coffeeBrown mb-12">
        What Our Customers Say
      </h2>
      <div className="max-w-3xl mx-auto space-y-12">
        {testimonials.map(({ id, name, text }) => (
          <div key={id} className="bg-yellow-50 rounded-2xl p-8 shadow-lg relative">
            <FaQuoteLeft className="absolute top-4 left-4 text-yellow-300 text-4xl" />
            <div className="flex items-center mb-4">
              <img
                src={`https://i.pravatar.cc/150?img=${id}`}
                alt={name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <h3 className="text-xl font-merriweather font-semibold text-[#4B2E0E]">{name}</h3>
            </div>
            
            <p className="text-[#6B4E16] text-lg leading-relaxed italic">
              {text}
            </p>
            <p className="text-[#4B2E0E] font-semibold mt-4 text-right">- {name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
