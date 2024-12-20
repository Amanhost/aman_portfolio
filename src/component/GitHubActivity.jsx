import React from "react";

const GitHubActivity = () => {
  return (
    <section id="github_activity" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            GitHub Activity
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A snapshot of my open source contributions and coding activity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contribution Stats */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-emerald-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-emerald-500 mb-2">
                1,234
              </div>
              <div className="text-sm text-neutral-400">
                Total Contributions
              </div>
            </div>
            <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-emerald-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-emerald-500 mb-2">45</div>
              <div className="text-sm text-neutral-400">
                Public Repositories
              </div>
            </div>
            <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-emerald-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-emerald-500 mb-2">
                156
              </div>
              <div className="text-sm text-neutral-400">Pull Requests</div>
            </div>
            <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-emerald-500/50 transition-all duration-300">
              <div className="text-2xl font-bold text-emerald-500 mb-2">89</div>
              <div className="text-sm text-neutral-400">Code Reviews</div>
            </div>
          </div>

          {/* GitHub Profile Link */}
          <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between">
            <div className="mb-4">
              <svg
                className="w-10 h-10 text-white mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2">
                Connect on GitHub
              </h3>
              <p className="text-neutral-400 mb-4">
                Check out my latest projects and contributions
              </p>
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-300"
            >
              <span>View GitHub Profile</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
