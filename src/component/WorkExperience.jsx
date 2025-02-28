import React from "react";

import pdf from "../../src/Assets/Image/AmanPrakashResume.pdf";
const WorkExperience = () => {
  const experiences = [
    {
      time: "2022 - Present",
      role: "Senior Full Stack Developer",
      company: "Tech Innovation Labs",
      details: [
        "Led development of enterprise-level applications using React and Node.js",
        "Implemented microservices architecture improving scalability by 200%",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      time: "2020 - 2022",
      role: "Full Stack Developer",
      company: "Digital Solutions Co.",
      details: [
        "Developed and maintained multiple client projects using MERN stack",
        "Reduced loading time by 60% through optimization techniques",
        "Implemented CI/CD pipelines using GitHub Actions",
      ],
    },
    {
      time: "2018 - 2020",
      role: "Frontend Developer",
      company: "WebTech Startups",
      details: [
        "Built responsive web applications using React and Vue.js",
        "Improved user engagement by 40% through UI/UX enhancements",
        "Collaborated with design team to implement pixel-perfect designs",
      ],
    },
  ];

  return (
    <section id="work_experience" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A journey through my professional experience and achievements
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-neutral-800"></div>
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 border-4 border-neutral-900"></div>
                </div>
                <div className="md:grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right mb-8 md:mb-0 md:pr-12">
                    <div className="inline-block px-4 py-2 rounded-full border border-emerald-500/30 text-emerald-500 mb-4">
                      {exp.time}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-neutral-400">{exp.company}</p>
                  </div>
                  <div className="md:pl-12">
                    <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-emerald-500/50 transition-all duration-300">
                      <ul className="space-y-3 text-neutral-400">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href={pdf}
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-300"
          >
            <span>Download Resume</span>
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
