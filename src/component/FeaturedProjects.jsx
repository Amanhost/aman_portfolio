import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";
import { projects } from "../data/projects";

const FeaturedProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <SectionWrapper id="featured_projects">
      <div className="orb orb-teal w-80 h-80 -bottom-40 -left-40" />

      <SectionHeader
        accent="Portfolio"
        title="Featured Projects"
        subtitle="Professional projects showcasing enterprise solutions and real-world AI systems"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.06]
                         hover:border-emerald-500/30 transition-all duration-500
                         aspect-[16/10] sm:aspect-auto sm:h-[320px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover
                           group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 group-hover:from-black/98 transition-all duration-500" />

              <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6">
                <div>
                  {project.category && (
                    <span className="inline-block px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 mb-3">
                      {project.category}
                    </span>
                  )}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-montserrat">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[10px] sm:text-xs
                                   rounded-full bg-white/5 text-emerald-400
                                   border border-emerald-500/20 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.git && (
                    <motion.a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-neutral-300
                                 hover:text-emerald-400 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      View on GitHub
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
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Button variant="outline" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : `View All ${projects.length} Projects`}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Button>
      </motion.div>
    </SectionWrapper>
  );
};

export default FeaturedProjects;
