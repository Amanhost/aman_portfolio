import React from "react";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Maltimart-ecommerce",
      description:
        "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      image: "https://placehold.co/800x400/333/white?text=E-Commerce+Platform",
      technologies: ["React.js", "Node.js", "PostgreSQL"],
      git: "https://github.com/Amanhost/Maltimart-ecommerce",
    },
    {
      id: 2,
      title: "Domain Provider Webpage",
      description:
        "Web app for domain provider user can have different-2 price of number of domain ",
      image: "https://placehold.co/800x400/333/white?text=Domain+Provider",
      technologies: ["React Js", "Redux", "JavScript"],
      git: "https://github.com/Amanhost/domin_privider",
    },
    {
      id: 3,
      title: "Crypto_currency_API_React",
      description:
        "Web app for domain provider user can have different-2 price of number of domain ",
      image:
        "https://placehold.co/800x400/333/white?text=CryptoCurrency+Interface",
      technologies: ["React Js", "Redux", "JavScript", "java"],
      git: "https://github.com/Amanhost/Crypto_currency_API_React",
    },
  ];

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section id="featured_projects" className="py-24 section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Showcasing some of my best work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl border border-neutral-800 section overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} Project`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full border border-emerald-500/30 status-emerald"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    target="_blank"
                    href={project.git}
                    className="text-neutral-300 hover:status-emerald transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-neutral-300 hover:status-emerald transition-colors duration-300"
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={scrollToBottom}
            className="inline-flex items-center px-6 py-3 border border-emerald-500 text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors duration-300"
          >
            <span>View All Projects</span>
            <svg
              className="w-4 h-4 ml-2"
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
