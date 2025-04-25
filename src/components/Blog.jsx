import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of the Perfect Pour-Over",
    content: "Learn how to brew the perfect pour-over coffee at home with our step-by-step guide...",
  },
  {
    id: 2,
    title: "New Seasonal Blend: Ethiopian Yirgacheffe",
    content: "We're excited to introduce our new seasonal blend, featuring the exquisite Ethiopian Yirgacheffe coffee...",
  },
];

export default function Blog() {
  return (
    <section className="py-20 px-6 md:px-20 bg-yellow-50">
      <h2 className="text-4xl font-merriweather font-extrabold text-center text-coffeeBrown mb-12">
        Our Blog
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {blogPosts.map(({ id, title, content }) => (
          <div key={id} className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-merriweather font-semibold text-[#4B2E0E] mb-4">{title}</h3>
            <p className="text-[#6B4E16]">{content}</p>
            <a href="#" className="text-yellow-600 hover:text-yellow-800 font-semibold">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
