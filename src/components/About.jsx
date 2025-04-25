import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <img
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
          alt="Coffee beans"
          className="rounded-3xl shadow-lg w-full md:w-1/2 object-cover h-96"
          loading="lazy"
        />
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-playfair font-bold text-[#4B2E0E]">
            About Coffee Cafe
          </h2>
          <p className="text-[#6B4E16] text-lg leading-relaxed">
            At Coffee Cafe, we believe in more than just coffee. We believe in community, quality, and passion. Our beans are sourced ethically from the best farms around the world and roasted to perfection to bring you a cup of joy every time.
          </p>
          <p className="text-[#6B4E16] text-lg leading-relaxed">
            Whether you want a quick espresso or a relaxing afternoon latte, our baristas are here to craft your perfect cup.
          </p>
        </div>
      </div>
    </section>
  );
}
