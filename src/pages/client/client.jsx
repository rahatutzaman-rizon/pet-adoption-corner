// src/components/TestimonialPage.js

import React from "react";
import { FaPaw, FaStar } from "react-icons/fa"; // For icons

const testimonials = [
  {
    name: "Ayesha Rahman",
    location: "Dhaka",
    review:
      "I had an amazing experience adopting my puppy from this platform. The process was smooth, and the support team was very responsive. Highly recommend!",
    rating: 5,
  },
  {
    name: "Mizanur Rahman",
    location: "Dhaka",
    review:
      "Great selection of pets! I found my perfect cat here. The team was very helpful and guided me through the entire adoption process.",
    rating: 4,
  },
  {
    name: "Sara Ahmed",
    location: "Dhaka",
    review:
      "Adopting a pet was such a wonderful experience, thanks to this website. The service was professional, and the pets are well taken care of.",
    rating: 5,
  },
];

const Client = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-primary-600 mb-8">
        What Our Clients Say
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <FaPaw className="text-primary-600 text-3xl mr-2" />
              <h3 className="text-xl font-semibold text-primary-600">
                {testimonial.name}
              </h3>
            </div>
            <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">📍 {testimonial.location}</span>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
