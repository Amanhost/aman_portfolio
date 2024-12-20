import React, { useState } from "react";
import FeaturedProjects from "./FeaturedProjects";
import AboutJourney from "./AboutJourney";
import SkillsExpertise from "./SkillsExpertise";
import Testimonials from "./Testimonials ";
import WorkExperience from "./WorkExperience";
import GitHubActivity from "./GitHubActivity";
import BlogInsights from "./BlogInsights";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Type from "./Type";
import avtar from "../../src/Assets/Image/amanimg.jpg";
import Resume from "./Resume";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const links = [
    { href: "#tech_stack", label: "Tech Stack" },
    { href: "#featured_projects", label: "Projects" },
    { href: "#about_journey", label: "About" },
    { href: "#work_experience", label: "Experience" },
    { href: "#blog_insights", label: "Blog" },
    { href: "#contact_connect", label: "Contact", isActive: true },
  ];
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", proficiency: 95 },
        { name: "JavaScript", proficiency: 95 },
        { name: "Redux", proficiency: 90 },
        { name: "Tailwind CSS", proficiency: 98 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", proficiency: 80 },
        { name: "MicroSoft SQl Server", proficiency: 85 },
        { name: "SQL", proficiency: 88 },
        { name: "Veem backup", proficiency: 90 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Postman", proficiency: 90 },
        { name: "Dynamo DB", proficiency: 82 },
        { name: "Deployment", proficiency: 95 },
        { name: "Git", proficiency: 95 },
        { name: "GitHub", proficiency: 95 },
      ],
    },
  ];
  const skills = [
    "ES6",
    "TypeScript",
    "HTML",
    "CSS",
    "Ionic",
    "Carbon React",

    "MongoDB",
  ];
  return (
    <>
      <div className="relative bg-neutral-900">
        <header className="fixed w-full top-0 z-50 border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <a href="#" className="text-2xl font-bold text-white">
                  AMAN<span className="text-emerald-500">.PRAKASH</span>
                </a>
              </div>

              <nav className="hidden lg:flex items-center space-x-8">
                <a
                  href="#tech_stack"
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  Tech Stack
                </a>
                <a
                  href="#featured_projects"
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  Projects
                </a>
                <a
                  href="#about_journey"
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  About
                </a>
                <a
                  href="#work_experience"
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  Experience
                </a>
                <a
                  href="#blog_insights"
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  Blog
                </a>
                <a
                  href="#contact_connect"
                  className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-300"
                >
                  Contact
                </a>
              </nav>

              <button
                type="button"
                className="lg:hidden text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleMenu}
                aria-controls="mobile-menu"
                aria-expanded={isOpen ? "true" : "false"}
              >
                {!isOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {isOpen && (
            <div
              id="mobile-menu"
              className="lg:hidden bg-neutral-800/80 backdrop-blur-lg"
              onClick={() => setIsOpen(false)}
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`block px-3 py-2 transition-colors duration-300 ${
                      link.isActive
                        ? "text-emerald-500 hover:text-emerald-400"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </header>

        <section
          id="navbar_hero"
          className="relative min-h-screen pt-20 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h5 className="text-4xl lg:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Hi, NICE TO MEET YOU! I'M{" "}
                  <span className="text-emerald-500">Aman Prakash 👋🏻</span>
                  <span className="text-emerald-500">
                    <Type />
                  </span>
                </h5>

                <p className="text-lg text-neutral-300">
                  Full-stack developer passionate about building innovative
                  solutions and creating seamless user experiences. Let's turn
                  ideas into reality.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact_connect"
                    className="px-6 py-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-300"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="#featured_projects"
                    className="px-6 py-3 rounded-lg border border-neutral-700 text-white hover:bg-neutral-800 transition-colors duration-300"
                  >
                    View Projects
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-full bg-emerald-500/20 animate-pulse"></div>
                <img
                  src={avtar}
                  alt="Developer Profile"
                  className="absolute inset-0 w-full h-full object-cover rounded-full border-2 border-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-center">
            <a
              href="#tech_stack"
              className="animate-bounce text-neutral-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </a>
          </div>
        </section>
      </div>
      <div id="root">
        <section id="tech_stack" className="relative py-24 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Technical Expertise
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Proficient in modern technologies and frameworks, constantly
                expanding my skillset to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-emerald-500/50 transition-colors duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="group">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-neutral-300">{skill.name}</span>
                          <span className="text-emerald-500">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-emerald-500 w-[${skill.proficiency}%] group-hover:animate-pulse transition-all duration-300`}
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-neutral-400 mb-6">
                Additional technologies I work with
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full border border-neutral-800 text-neutral-300 hover:border-emerald-500 hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* --------------------2 */}
      <FeaturedProjects />
      <AboutJourney />
      <SkillsExpertise />
      <WorkExperience />
      <Testimonials />
      <GitHubActivity />
      <BlogInsights />
      {/* <Resume /> */}
      <ContactSection />

      <Footer />
    </>
  );
};

export default Nav;
