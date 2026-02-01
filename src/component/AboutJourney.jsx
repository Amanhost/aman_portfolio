import React from "react";

const AboutJourney = () => {
  const CAREER_START_YEAR = 2021;

  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - CAREER_START_YEAR;
  const highlights = [
    {
      title: "Passion for Problem Solving",
      description:
        "I thrive on tackling complex challenges and transforming them into elegant solutions that make a real impact.",
    },
    {
      title: "Continuous Learning",
      description:
        "Technology evolves rapidly, and I'm committed to staying at the forefront of innovation through continuous learning and experimentation.",
    },
    {
      title: "User-Centric Approach",
      description:
        "I believe in creating solutions that not only solve problems but also provide exceptional user experiences.",
    },
  ];

  const stats = [
    { label: "Years Experience", value: `${yearsExperience}+` },
    { label: "Projects Completed", value: "25+" },
    { label: "Happy Clients", value: "18+" },
  ];

  return (
    <section id="about_journey" className="py-24 section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-neutral-800">
              <img
                src="https://avatar.iran.liara.run/public"
                alt="Professional Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl"></div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                My Journey in Tech
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                With over 5 years of experience in software development, I've
                had the privilege of working on diverse projects that have
                shaped my expertise in creating innovative digital solutions.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map(({ title, description }, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l border-neutral-800"
                >
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-emerald-500"></div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-neutral-400">{description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {stats.map(({ label, value }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 section"
                >
                  <span className="status-emerald">{value}</span>
                  <span className="text-neutral-400">{label}</span>
                </div>
              ))}
            </div>

            <div>
              <a
                href="#contact_connect"
                className="inline-flex items-center gap-2 status-emerald hover:text-emerald-400 transition-colors duration-300"
              >
                <span>Let's create something amazing together</span>
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;
