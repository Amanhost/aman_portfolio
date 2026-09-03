import React from "react";
import { motion } from "framer-motion";
import { socialLinks, navLinks } from "../data/navigation";
import DotGrid from "./ui/effects/DotGrid";
import SplitText from "./ui/effects/SplitText";
import ShinyText from "./ui/effects/ShinyText";
import Magnet from "./ui/effects/Magnet";
import StarBorder from "./ui/effects/StarBorder";
import LogoLoop from "./ui/effects/LogoLoop";

const socialIcons = {
  WhatsApp: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.52 3.48A11.944 11.944 0 0012 0C5.373 0 0 5.373 0 12a11.945 11.945 0 001.844 6.328l-1.202 4.386a.75.75 0 00.933.933l4.386-1.202A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12a11.944 11.944 0 00-3.48-8.52z" />
    </svg>
  ),
  Instagram: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.5 2C4.462 2 2 4.462 2 7.5v9c0 3.038 2.462 5.5 5.5 5.5h9c3.038 0 5.5-2.462 5.5-5.5v-9c0-3.038-2.462-5.5-5.5-5.5h-9zM12 8.75a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5zm6.75-1.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
    </svg>
  ),
  GitHub: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0a12 12 0 00-3.797 23.389c.6.111.818-.261.818-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 016.003 0c2.293-1.552 3.301-1.23 3.301-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12 12 0 0012 0z" />
    </svg>
  ),
  LinkedIn: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
};

const services = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "API Integration",
  "Database Design",
];

const contactRows = [
  {
    label: "amanprakash1639@gmail.com",
    href: "mailto:amanprakash1639@gmail.com",
    path: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "+(91) 8303299351",
    href: "tel:+918303299351",
    path: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    label: "Jaunpur, India",
    href: null,
    path: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  },
];

const marqueeWords = [
  "Available for work",
  "React",
  "AI Engineering",
  "Node.js",
  "Cloud Native",
  "Let's build",
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/[0.06] bg-brand-bg text-neutral-400"
    >
      <DotGrid gap={38} proximity={120} dotSize={1.3} />
      <div className="orb orb-emerald -bottom-40 -left-40 h-80 w-80" />
      <div className="orb orb-teal -top-32 right-0 h-72 w-72" />

      {/* ===== CTA band ===== */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <ShinyText>Open to opportunities</ShinyText>
          </span>

          <h2 className="font-montserrat text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            <SplitText text="Let's build something " by="words" />
            <span className="gradient-text">
              <SplitText text="exceptional." by="words" delay={0.3} />
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-neutral-400">
            Have a project, a role, or an idea worth shipping? My inbox is
            always open.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Magnet>
              <StarBorder>
                <a
                  href="mailto:amanprakash1639@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-emerald-400 transition-colors duration-300 hover:text-white"
                >
                  Start a conversation{" "}
                  <span aria-hidden="true">→</span>
                </a>
              </StarBorder>
            </Magnet>

            <Magnet>
              <a
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3.5 font-medium text-neutral-300 transition-all duration-300 hover:border-emerald-500/40 hover:text-white"
              >
                View résumé
              </a>
            </Magnet>
          </div>
        </motion.div>
      </div>

      {/* ===== marquee divider ===== */}
      <div className="relative z-10 mt-16 border-y border-white/[0.06] py-5">
        <LogoLoop speed={26}>
          {marqueeWords.map((word) => (
            <span
              key={word}
              className="flex items-center gap-6 px-6 font-montserrat text-sm font-semibold uppercase tracking-[0.2em] text-neutral-600"
            >
              {word}
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/60" />
            </span>
          ))}
        </LogoLoop>
      </div>

      {/* ===== link columns ===== */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="font-montserrat text-lg font-semibold text-white">
              Aman <span className="gradient-text">Prakash</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Passionate full-stack developer crafting exceptional digital
              experiences with modern technologies and creative solutions.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06]
                             bg-white/[0.05] transition-all duration-300 hover:-translate-y-1
                             hover:border-emerald-500/40 hover:text-emerald-400
                             hover:shadow-[0_8px_20px_rgba(16,185,129,0.15)]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {socialIcons[link.name]}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href || "#"}
                    className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-emerald-400"
                  >
                    <span className="h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              {contactRows.map((row) => {
                const content = (
                  <>
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={row.path}
                      />
                    </svg>
                    {row.label}
                  </>
                );

                return (
                  <li key={row.label} className="flex items-center gap-2 text-sm">
                    {row.href ? (
                      <a
                        href={row.href}
                        className="inline-flex items-center gap-2 transition-colors hover:text-emerald-400"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* ===== bottom bar ===== */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-neutral-500">
            Designed &amp; Developed by{" "}
            <span className="text-neutral-300">Aman Prakash</span>
          </p>

          <p className="text-xs text-neutral-500">
            &copy; {currentYear} All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2
                       text-xs text-neutral-400 transition-all duration-300
                       hover:border-emerald-500/40 hover:text-emerald-400"
          >
            Back to top
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
