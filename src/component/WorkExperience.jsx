import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";
import Button from "./ui/Button";
import { experiences } from "../data/experience";
import pdf from "../../src/Assets/Image/AmanPrakashResume.pdf";

const WorkExperience = () => {
  return (
    <SectionWrapper id="work_experience">
      <SectionHeader
        accent="Career"
        title="Work Experience"
        subtitle="A journey through my professional experience and achievements"
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-emerald-500/50 via-teal-500/30 to-transparent" />

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 border-4 border-brand-bg shadow-lg shadow-emerald-500/30"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                />
              </div>

              <div className="md:grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right mb-8 md:mb-0 md:pr-12">
                  <motion.div
                    className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-4 font-mono"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.1 }}
                  >
                    {exp.time}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-1 font-montserrat">
                    {exp.role}
                  </h3>
                  <p className="text-neutral-400">{exp.company}</p>
                </div>

                <div className="md:pl-12">
                  <GlassCard delay={index * 0.15 + 0.2}>
                    <ul className="space-y-3 text-neutral-400 text-sm">
                      {exp.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.15 + idx * 0.05 + 0.3,
                          }}
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 flex-shrink-0" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <Button
          href={pdf}
          variant="outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </Button>
      </motion.div>
    </SectionWrapper>
  );
};

export default WorkExperience;
