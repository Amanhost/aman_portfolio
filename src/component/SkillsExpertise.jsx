import React from "react";

const SkillsExpertise = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      ),
      skills: [
        "HTML5, CSS3, JavaScript (ES6+)",
        "React.js, Next.js, Vue.js",
        "Tailwind CSS, SASS, Styled Components",
        "Redux, Context API, React Query",
      ],
    },
    {
      title: "Backend Development",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      ),
      skills: [
        "Node.js, Express.js, NestJS",
        "Python, Django, Flask",
        "RESTful APIs, GraphQL",
        "SQL, MongoDB, Redis",
      ],
    },
    {
      title: "DevOps & Tools",
      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </>
      ),
      skills: [
        "Git, GitHub, GitLab",
        "Docker, Kubernetes",
        "AWS, Google Cloud, Azure",
        "CI/CD, Jenkins, GitHub Actions",
      ],
    },
  ];

  const proficiencyData = [
    { label: "Frontend Development", value: "95%" },
    { label: "Backend Development", value: "90%" },
    { label: "DevOps", value: "85%" },
    { label: "Problem Solving", value: "92%" },
  ];

  return (
    <section id="skills_expertise" className="py-24 section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Comprehensive skill set covering the full spectrum of modern web
            development
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-neutral-800 section hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 status-emerald"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              <ul className="space-y-3">
                {item.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-neutral-400"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Proficiency */}
        <div className="mt-16 p-8 rounded-xl border border-neutral-800 section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {proficiencyData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold status-emerald mb-2">
                  {item.value}
                </div>
                <div className="text-neutral-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExpertise;
