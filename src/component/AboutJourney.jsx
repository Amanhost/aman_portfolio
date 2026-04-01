import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeader from "./ui/SectionHeader";
import AnimatedText from "./ui/AnimatedText";
import Button from "./ui/Button";

const AboutJourney = () => {
  const CAREER_START_YEAR = 2021;
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - CAREER_START_YEAR;

  const highlights = [
    {
      title: "Passion for Problem Solving",
      description:
        "I thrive on tackling complex challenges and transforming them into elegant solutions that make a real impact.",
    },
    {
      title: "Continuous Learning",
      description:
        "Technology evolves rapidly, and I'm committed to staying at the forefront of innovation through continuous learning and experimentation.",
    },
    {
      title: "User-Centric Approach",
      description:
        "I believe in creating solutions that not only solve problems but also provide exceptional user experiences.",
    },
  ];

  const stats = [
    { label: "Years Experience", value: `${yearsExperience}+` },
    { label: "Projects Completed", value: "25+" },
    { label: "Happy Clients", value: "18+" },
  ];

  return (
    <SectionWrapper id="about_journey">
      <SectionHeader
        accent="About Me"
        title="My Journey in Tech"
        subtitle="Building innovative digital solutions with passion and precision"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm">
            <img
              src="https://avatar.iran.liara.run/public/boy"
              alt="Professional Portrait"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-transparent" />
          </div>
          {/* Decorative glow orbs */}
          <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-emerald-500/15 rounded-full blur-3xl" />
          <div className="absolute -top-8 -left-8 w-56 h-56 bg-teal-500/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Content side */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatedText
            text="With years of experience in software development, I've had the privilege of working on diverse projects that shaped my expertise in creating innovative digital solutions."
            className="text-neutral-400 leading-relaxed text-lg"
          />

          <div className="space-y-6">
            {highlights.map(({ title, description }, index) => (
              <motion.div
                key={index}
                className="relative pl-8 border-l-2 border-white/[0.08] hover:border-emerald-500/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400" />
                <h3 className="text-lg font-semibold text-white mb-1 font-montserrat">
                  {title}
                </h3>
                <p className="text-neutral-400 text-sm">{description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {stats.map(({ label, value }, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] backdrop-blur-sm border border-white/[0.06]"
              >
                <span className="gradient-text font-bold font-montserrat">{value}</span>
                <span className="text-neutral-400 text-sm">{label}</span>
              </div>
            ))}
          </motion.div>

          <Button href="#contact_connect" variant="outline">
            Let's create something amazing together
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutJourney;
