import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Finnova",
      role: "CEO, TechStart",
      feedback:
        "Working with this team has been an absolute pleasure! Their expertise and dedication have truly elevated our project to new heights.",
      avatar: "https://avatar.iran.liara.run/public",
    },
    {
      name: "Choice",
      role: "DS Engineer",
      feedback:
        "A phenomenal experience from start to finish. The team's professionalism and attention to detail exceeded all my expectations!",
      avatar: "https://avatar.iran.liara.run/public",
    },
    {
      name: "Adity Goyal",
      role: "Product Manager",
      feedback:
        "I couldn't be happier with the results. Every step of the process was handled with care and precision.",
      avatar: "https://avatar.iran.liara.run/public",
    },
    {
      name: "Bharat Singodiya ",
      role: "InnovateTech",
      feedback:
        "An outstanding team that consistently delivers exceptional results. Highly recommended!",
      avatar: "https://avatar.iran.liara.run/public",
    },
  ];

  return (
    <section id="testimonials" className="py-24 section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-neutral-800 section hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-neutral-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-neutral-400">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
