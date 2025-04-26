import React from "react";
import { motion } from "framer-motion"; // Import motion

export default function Hero() {
  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-32 md:py-40 mt-10 md:mt-16"
    >
      {/* Left Content */}
      <motion.div
        className="max-w-xl space-y-8"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-6xl font-merriweather font-extrabold text-coffeeBrown leading-tight">
          Freshly Brewed Coffee <br /> Just for You
        </h1>
        <p className="text-lg font-normal text-[#6B4E16] max-w-md">
          Experience the rich aroma and bold flavors of our hand-crafted coffee blends. Perfectly roasted beans, served with love.
        </p>
        <div className="flex space-x-6">
          <a
            href="#menu"
            className="bg-[#4B2E0E] text-yellow-300 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-400 hover:text-[#4B2E0E] transition"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="border-2 border-[#4B2E0E] text-[#4B2E0E] px-6 py-3 rounded-lg font-semibold hover:bg-[#4B2E0E] hover:text-yellow-300 transition"
          >
            Contact Us
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="mt-16 md:mt-0 max-w-lg relative"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
          alt="Coffee cup"
          className="rounded-3xl shadow-2xl object-cover w-full h-[28rem]"
          loading="lazy"
        />
        <div className="hidden md:block absolute -top-10 -right-10 w-48 h-48 rounded-full bg-yellow-200 opacity-30 blur-3xl"></div>
      </motion.div>
    </section>
  );
}
