import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";
import ProjectCard from "./ui/ProjectCard";
import HorizontalScroll from "./ui/effects/HorizontalScroll";
import Magnet from "./ui/effects/Magnet";
import useMediaQuery from "../hooks/useMediaQuery";
import useReducedMotion from "../hooks/useReducedMotion";
import { projects } from "../data/projects";

const FeaturedProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const reduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // The horizontal rail needs room to slide and a steady pointer,
  // so small screens and reduced-motion users get the stacked grid.
  const useRail = isDesktop && !reduced;

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="featured_projects" className="relative bg-brand-bg">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <SectionHeader
          accent="Portfolio"
          title="Featured Projects"
          subtitle="Professional projects showcasing enterprise solutions and real-world AI systems"
        />
      </div>

      {useRail ? (
        <>
          <HorizontalScroll>
            {/* intro panel that scrolls in with the rail */}
            <div className="flex w-[26rem] flex-shrink-0 flex-col justify-center pl-8 pr-10 xl:w-[30rem] xl:pl-16">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Scroll to explore
              </p>
              <h3 className="mt-4 font-montserrat text-4xl font-bold leading-tight text-white xl:text-5xl">
                {projects.length} projects,
                <br />
                <span className="gradient-text">end to end.</span>
              </h3>
              <p className="mt-5 max-w-sm text-neutral-400">
                Keep scrolling — the rail moves right to left. Each card opens
                up on hover.
              </p>
              <div className="mt-8 flex items-center gap-3 text-neutral-500">
                <span className="h-px w-12 bg-emerald-500/50" />
                <span className="text-sm">Drag-free, scroll driven</span>
              </div>
            </div>

            {projects.map((project, index) => (
              <div
                key={project.id}
                className="ml-6 h-[26rem] w-[22rem] flex-shrink-0 xl:h-[28rem] xl:w-[24rem]"
              >
                <ProjectCard
                  project={project}
                  index={index}
                  className="h-full w-full"
                />
              </div>
            ))}

            {/* tail spacer so the last card clears the right edge */}
            <div className="w-16 flex-shrink-0" aria-hidden="true" />
          </HorizontalScroll>

          <div className="relative z-10 pb-24 text-center">
            <Magnet>
              <Button href="https://github.com/Amanhost" variant="outline">
                See more on GitHub
                <svg
                  className="h-4 w-4"
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
          </div>
        </>
      ) : (
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="aspect-[16/11] sm:aspect-auto sm:h-[340px]"
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    className="h-full w-full"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-12 text-center">
            <Magnet>
              <Button variant="outline" onClick={() => setShowAll(!showAll)}>
                {showAll ? "Show Less" : `View All ${projects.length} Projects`}
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${
                    showAll ? "rotate-180" : ""
                  }`}
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
            </Magnet>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;
