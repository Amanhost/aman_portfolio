import React from "react";
import { BsBank } from "react-icons/bs";
import { FaDatabase, FaMoneyBill, FaQuoteLeft, FaStar } from "react-icons/fa";
import { FcManager } from "react-icons/fc";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Finnova",
      role: "CEO, TechStart",
      feedback:
        "Working with this team has been an absolute pleasure! Their expertise and dedication have truly elevated our project to new heights.",
      avatar: <BsBank />,
      rating: 5,
    },
    {
      name: "Choice",
      role: "DS Engineer",
      feedback:
        "A phenomenal experience from start to finish. The team's professionalism and attention to detail exceeded all my expectations!",
      avatar: <FaDatabase />,
      rating: 5,
    },
    {
      name: "Adity Goyal",
      role: "Product Manager",
      feedback:
        "I couldn't be happier with the results. Every step of the process was handled with care and precision.",
      avatar: <FcManager />,
      rating: 5,
    },
    {
      name: "Bharat Singodiya",
      role: "InnovateTech",
      feedback:
        "An outstanding team that consistently delivers exceptional results. Highly recommended!",
      avatar: <FaMoneyBill />,
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              {/* Top */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-full border border-neutral-700 
                  flex items-center justify-center 
                  bg-neutral-800 text-emerald-400 text-xl"
                >
                  {testimonial.avatar}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-neutral-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3 text-amber-400">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>

              {/* Feedback */}
              <div className="relative">
                <FaQuoteLeft className="text-emerald-500/40 text-xl mb-2" />
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
