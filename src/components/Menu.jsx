import React from "react";
import { FaCoffee, FaMugHot, FaCookieBite } from "react-icons/fa";
import { motion } from "framer-motion";

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    description: "Strong and bold shot of coffee with rich crema.",
    price: "$3.00",
    icon: <FaCoffee className="text-yellow-500 w-8 h-8" />,
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso with steamed milk and a thick layer of foam.",
    price: "$4.50",
    icon: <FaMugHot className="text-yellow-500 w-8 h-8" />,
  },
  {
    id: 3,
    name: "Chocolate Chip Cookie",
    description: "Freshly baked cookie with chunks of chocolate.",
    price: "$2.50",
    icon: <FaCookieBite className="text-yellow-500 w-8 h-8" />,
  },
  {
    id: 4,
    name: "Latte",
    description: "Smooth blend of espresso and steamed milk.",
    price: "$4.00",
    icon: <FaMugHot className="text-yellow-500 w-8 h-8" />,
  },
  {
    id: 5,
    name: "Americano",
    description: "Espresso diluted with hot water for a lighter taste.",
    price: "$3.50",
    icon: <FaCoffee className="text-yellow-500 w-8 h-8" />,
  },
  {
    id: 6,
    name: "Brownie",
    description: "Rich and fudgy brownie with a chocolatey flavor.",
    price: "$5.00",
    icon: <FaCookieBite className="text-yellow-500 w-8 h-8" />,
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-yellow-50 px-6 md:px-20">
      <h2 className="text-4xl font-merriweather font-extrabold text-center text-coffeeBrown mb-12">
        Our Menu
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {menuItems.map(({ id, name, description, price, icon }) => (
          <motion.div
            key={id}
            className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#4B2E0E]">{name}</h3>
            <p className="text-sm text-[#6B4E16] mb-4">{description}</p>
            <span className="font-bold text-yellow-600 text-lg">{price}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
