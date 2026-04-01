import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";
import Button from "./ui/Button";

const stats = [
  { label: "Total Contributions", value: "1,234" },
  { label: "Public Repositories", value: "45" },
  { label: "Pull Requests", value: "156" },
  { label: "Code Reviews", value: "89" },
];

const GitHubActivity = () => {
  return (
    <SectionWrapper id="github_activity">
      <SectionHeader
        accent="Open Source"
        title="GitHub Activity"
        subtitle="A snapshot of my open source contributions and coding activity"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contribution Stats */}
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <motion.div
                className="text-2xl font-bold gradient-text mb-2 font-montserrat"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
              >
                {item.value}
              </motion.div>
              <div className="text-xs text-neutral-400">{item.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <GlassCard delay={0.3}>
          <div className="flex flex-col justify-between h-full">
            <div className="mb-4">
              <svg
                className="w-10 h-10 text-white mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <h3 className="text-lg font-semibold text-white mb-2 font-montserrat">
                Connect on GitHub
              </h3>
              <p className="text-neutral-400 text-sm mb-4">
                Check out my latest projects and contributions
              </p>
            </div>
            <Button
              href="https://github.com/Amanhost"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile
            </Button>
          </div>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
};

export default GitHubActivity;
