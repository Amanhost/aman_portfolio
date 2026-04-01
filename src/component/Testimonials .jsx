import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeader from "./ui/SectionHeader";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeader
        accent="Feedback"
        title="Client Testimonials"
        subtitle="What clients say about working with me"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            {/* Quote icon */}
            <FaQuoteLeft className="text-emerald-500/20 text-3xl mb-4 group-hover:text-emerald-500/40 transition-colors" />

            {/* Feedback */}
            <p className="text-neutral-300 leading-relaxed mb-6 text-sm">
              {testimonial.feedback}
            </p>

            {/* Bottom: avatar + info + rating */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-white/[0.06] flex items-center justify-center text-emerald-400 font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm font-montserrat">
                    {testimonial.name}
                  </h4>
                  <p className="text-neutral-500 text-xs">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-0.5 text-amber-400/80">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} size={12} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
