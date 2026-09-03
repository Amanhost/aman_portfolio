import React from "react";
import SpotlightCard from "./effects/SpotlightCard";

/**
 * Single project tile. Used by both the horizontal rail (desktop)
 * and the stacked grid (mobile).
 */
const ProjectCard = ({ project, index, className = "" }) => {
  return (
    <SpotlightCard
      className={`group relative flex flex-col justify-end rounded-3xl border border-white/[0.07]
                  bg-brand-surface transition-colors duration-500
                  hover:border-emerald-500/40 ${className}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover opacity-70
                   transition-transform duration-[900ms] ease-out group-hover:scale-110"
        loading="lazy"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10
                   transition-opacity duration-500 group-hover:from-black"
      />

      {/* index watermark */}
      <span
        className="pointer-events-none absolute right-6 top-5 font-montserrat text-5xl font-bold
                   text-white/[0.07] transition-colors duration-500 group-hover:text-emerald-500/20"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative z-10 p-6 sm:p-7">
        {project.category && (
          <span
            className="mb-3 inline-block rounded-full border border-emerald-500/25 bg-emerald-500/10
                       px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400"
          >
            {project.category}
          </span>
        )}

        <h3 className="font-montserrat text-lg font-bold leading-snug text-white sm:text-xl">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-neutral-300 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-emerald-500/20 bg-white/5 px-2.5 py-1
                         text-[10px] text-emerald-400 backdrop-blur-sm sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* reveal-on-hover action row */}
        <div
          className="mt-5 max-h-0 overflow-hidden opacity-0 transition-all duration-500
                     group-hover:max-h-16 group-hover:opacity-100"
        >
          {project.git ? (
            <a
              href={project.git}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300"
            >
              View on GitHub{" "}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-neutral-400">
              Private / client project
            </span>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
};

export default ProjectCard;
