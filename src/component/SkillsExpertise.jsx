import React from "react";

const SkillsExpertise = () => {
  return (
    <section id="skills_expertise" className="py-24 section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Comprehensive skill set covering the full spectrum of modern web
            development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Development */}
          <div className="p-6 rounded-xl border border-neutral-800 section hover:border-emerald-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 status-emerald"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Frontend Development
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                HTML5, CSS3, JavaScript (ES6+)
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                React.js, Next.js, Vue.js
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Tailwind CSS, SASS, Styled Components
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Redux, Context API, React Query
              </li>
            </ul>
          </div>

          {/* Backend Development */}
          <div className="p-6 rounded-xl border border-neutral-800 section hover:border-emerald-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 status-emerald"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Backend Development
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Node.js, Express.js, NestJS
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Python, Django, Flask
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                RESTful APIs, GraphQL
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                SQL, MongoDB, Redis
              </li>
            </ul>
          </div>

          {/* DevOps & Tools */}
          <div className="p-6 rounded-xl border border-neutral-800 section hover:border-emerald-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 status-emerald"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              DevOps & Tools
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Git, GitHub, GitLab
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Docker, Kubernetes
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                AWS, Google Cloud, Azure
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                CI/CD, Jenkins, GitHub Actions
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-xl border border-neutral-800 section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold status-emerald mb-2">95%</div>
              <div className="text-neutral-400">Frontend Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold status-emerald mb-2">90%</div>
              <div className="text-neutral-400">Backend Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold status-emerald mb-2">85%</div>
              <div className="text-neutral-400">DevOps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold status-emerald mb-2">92%</div>
              <div className="text-neutral-400">Problem Solving</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExpertise;
