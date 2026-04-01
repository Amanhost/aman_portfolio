import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";
import { skillsOverview, proficiencyData } from "../data/skills";

const iconPaths = {
  "Frontend Development": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  ),
  "Backend Development": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
    />
  ),
  "DevOps & Tools": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z"
    />
  ),
};

const SkillsExpertise = () => {
  return (
    <SectionWrapper id="skills_expertise">
      <SectionHeader
        accent="Capabilities"
        title="Skills & Expertise"
        subtitle="Comprehensive skill set covering the full spectrum of modern web development"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsOverview.map((item, index) => (
          <GlassCard key={index} delay={index * 0.1}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {iconPaths[item.title] || iconPaths["Frontend Development"]}
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-white mb-4 font-montserrat">
              {item.title}
            </h3>

            <ul className="space-y-3">
              {item.skills.map((skill, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-3 text-neutral-400 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + idx * 0.05 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 flex-shrink-0" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>

      {/* Proficiency bars */}
      <motion.div
        className="mt-16 p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.06]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {proficiencyData.map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-3xl font-bold gradient-text mb-2 font-montserrat">
                {item.value}
              </div>
              <div className="text-neutral-400 text-sm">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default SkillsExpertise;
