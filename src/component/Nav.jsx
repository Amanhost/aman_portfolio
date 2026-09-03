import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeaturedProjects from "./FeaturedProjects";
import AboutJourney from "./AboutJourney";
import SkillsExpertise from "./SkillsExpertise";
import Testimonials from "./Testimonials ";
import WorkExperience from "./WorkExperience";
import GitHubActivity from "./GitHubActivity";
import BlogInsights from "./BlogInsights";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";
import Button from "./ui/Button";

import DotGrid from "./ui/effects/DotGrid";
import Aurora from "./ui/effects/Aurora";
import SplitText from "./ui/effects/SplitText";
import ShinyText from "./ui/effects/ShinyText";
import RotatingText from "./ui/effects/RotatingText";
import CountUp from "./ui/effects/CountUp";
import TiltedCard from "./ui/effects/TiltedCard";
import Magnet from "./ui/effects/Magnet";
import StarBorder from "./ui/effects/StarBorder";
import LogoLoop from "./ui/effects/LogoLoop";

import { DiJavascript1, DiHtml5, DiCss3, DiDatabase } from "react-icons/di";
import { FaJava, FaNode, FaReact } from "react-icons/fa";
import { SiJavascript, SiRedux, SiSalesforce, SiVeeam } from "react-icons/si";
import { TbBrandCarbon, TbBrandNextjs } from "react-icons/tb";
import { Link } from "react-router-dom";
import { skillCategories } from "../data/skills";
import { navLinks } from "../data/navigation";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <motion.header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <a
                href="/"
                className="text-2xl font-bold text-white font-montserrat"
              >
                AMAN<span className="gradient-text">.PRAKASH</span>
              </a>
            </motion.div>

            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) =>
                link.to ? (
                  <Link
                    key={index}
                    to={link.to}
                    className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                ) : link.isActive ? (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.a>
                ) : (
                  <a
                    key={index}
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </nav>

            <button
              type="button"
              className="lg:hidden text-neutral-400 hover:text-white focus:outline-none"
              onClick={toggleMenu}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              className="lg:hidden glass-strong"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navLinks.map((link, index) =>
                  link.to ? (
                    <Link
                      key={index}
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={index}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                    >
                      {link.label}
                    </a>
                  ),
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ===== HERO ===== */}
      <section
        id="navbar_hero"
        className="relative min-h-screen pt-20 overflow-hidden gradient-bg"
      >
        {/* Animated background layers */}
        <Aurora />
        <DotGrid gap={34} proximity={140} />

        {/* Floating orbs */}
        <div className="orb orb-emerald w-96 h-96 -top-48 -right-48 animate-float" />
        <div
          className="orb orb-teal w-72 h-72 bottom-20 -left-36 animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="orb orb-emerald w-48 h-48 top-1/3 right-1/4 animate-float"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <ShinyText>Available for opportunities</ShinyText>
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight font-montserrat"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <SplitText text="Hi, I'm " by="chars" stagger={0.035} />
                <span className="gradient-text glow-text">
                  <SplitText
                    text="Aman Prakash"
                    by="chars"
                    stagger={0.035}
                    delay={0.25}
                  />{" "}
                  <span role="img" aria-label="wave">
                    👋🏻
                  </span>
                </span>
                <br />
                <span className="text-emerald-400">
                  <RotatingText
                    texts={[
                      "AI Software Engineer",
                      "Frontend Engineer",
                      "React Specialist",
                      "Cloud-Native Builder",
                    ]}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-neutral-300 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                AI Software Engineer with 4+ years of experience designing,
                building, and deploying intelligent systems, cloud-native
                platforms, and AI-powered applications.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <Magnet>
                  <Button href="#contact_connect" variant="primary">
                    Get in Touch
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Button>
                </Magnet>

                <Magnet>
                  <StarBorder>
                    <a
                      href="#featured_projects"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-emerald-400 hover:text-white transition-colors duration-300"
                    >
                      View Projects
                    </a>
                  </StarBorder>
                </Magnet>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                className="flex gap-8 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                {[
                  { value: 4, suffix: "+", label: "Years Exp." },
                  { value: 25, suffix: "+", label: "Projects" },
                  { value: 18, suffix: "+", label: "Clients" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold gradient-text">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TiltedCard className="rounded-full" max={14}>
                <div className="aspect-square rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/10 animate-pulse" />
                <img
                  src="/aman-prakash-profile.png"
                  alt="Aman Prakash Frontend Developer from India"
                  className="absolute inset-0 w-full h-full object-cover rounded-full border-2 border-emerald-500/20"
                  loading="eager"
                />
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full border border-emerald-500/10 animate-glow" />
              </TiltedCard>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a
            href="#tech_stack"
            className="text-neutral-400 hover:text-emerald-400 transition-colors"
            aria-label="Scroll down"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </section>

      {/* ===== TECH STACK ===== */}
      <SectionWrapper id="tech_stack">
        {/* Decorative orbs */}
        <div className="orb orb-emerald w-64 h-64 -top-32 -right-32" />

        <SectionHeader
          accent="Skills"
          title="Technical Expertise"
          subtitle="Proficient in modern technologies and frameworks, constantly expanding my skillset to deliver cutting-edge solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <h3 className="text-xl font-semibold text-white mb-5 font-montserrat">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-neutral-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-emerald-400 font-medium">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: idx * 0.05,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-neutral-400 mb-8">
            Additional technologies I work with
          </p>
          <LogoLoop speed={38}>
            {[
              DiJavascript1,
              FaReact,
              SiRedux,
              SiVeeam,
              DiHtml5,
              DiCss3,
              FaNode,
              TbBrandNextjs,
              DiDatabase,
              SiSalesforce,
              TbBrandCarbon,
              FaJava,
              SiJavascript,
            ].map((Icon, index) => (
              <span key={index} className="tech-icons">
                <Icon />
              </span>
            ))}
          </LogoLoop>
        </motion.div>
      </SectionWrapper>

      {/* ===== SECTIONS ===== */}
      <FeaturedProjects />
      <AboutJourney />
      <SkillsExpertise />
      <WorkExperience />
      <Testimonials />
      <GitHubActivity />
      <BlogInsights />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Nav;
