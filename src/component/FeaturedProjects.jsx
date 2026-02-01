import React, { useState } from "react";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Loan Origination & Management System (LOS/LMS)",
      description:
        "Enterprise-grade system for NBFCs covering customer onboarding, loan processing, approvals, repayments, and reporting with secure RBAC.",
      image:
        "https://placehold.co/800x400/111827/ffffff?text=Loan+Management+System",
      technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
      git: null,
    },
    {
      id: 2,
      title: "NBFC Document Scan & Verification",
      description:
        "Secure document scanning platform with OCR extraction, validation workflows, and compliance-ready audit trails.",
      image:
        "https://placehold.co/800x400/111827/ffffff?text=Document+Verification",
      technologies: ["React", "OCR", "REST API"],
      git: null,
    },
    {
      id: 3,
      title: "Real-Time Chat Application",
      description:
        "Scalable chat app with authentication, live presence, read receipts, and socket-based real-time messaging.",
      image: "https://placehold.co/800x400/111827/ffffff?text=Real-Time+Chat",
      technologies: ["React", "Socket.io", "Zustand"],
      git: "https://github.com/Amanhost/fullstack-chat-app",
    },
    {
      id: 4,
      title: "CRM Platform",
      description:
        "CRM system to manage leads, customers, follow-ups, and analytics through interactive dashboards.",
      image: "https://placehold.co/800x400/111827/ffffff?text=CRM+Platform",
      technologies: ["React", "Redux", "Material UI"],
      git: null,
    },
    {
      id: 5,
      title: "USP – Uvation Service Platform",
      description:
        "Unified platform offering AI Foundry, Cloud, and Datacenter services with centralized monitoring.",
      image: "https://placehold.co/800x400/111827/ffffff?text=Service+Platform",
      technologies: ["React", "Cloud", "Microservices"],
      git: null,
    },
    {
      id: 6,
      title: "IAM Access Control (RBAC)",
      description:
        "Identity & Access Management solution implementing secure role-based access across applications.",
      image: "https://placehold.co/800x400/111827/ffffff?text=IAM+RBAC",
      technologies: ["React", "JWT", "RBAC"],
      git: null,
    },
    {
      id: 7,
      title: "Contract Signing Platform",
      description:
        "Digital contract signing system with secure workflows, audit logs, and DocuSign integration.",
      image: "https://placehold.co/800x400/111827/ffffff?text=Contract+Signing",
      technologies: ["React", "DocuSign API"],
      git: null,
    },
    {
      id: 8,
      title: "Payment Flow Integration",
      description:
        "End-to-end payment flow supporting PO, ACH, and Stripe with secure checkout and reconciliation.",
      image:
        "https://placehold.co/800x400/111827/ffffff?text=Payment+Integration",
      technologies: ["Stripe", "ACH", "React"],
      git: null,
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="featured_projects" className="py-20 section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Professional projects showcasing enterprise solutions and real-world
            AI-systems
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden border border-neutral-800
                         hover:border-emerald-500/50 transition-all duration-300
                         h-auto sm:h-[300px] md:h-[320px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover
                           group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />

              <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 line-clamp-4 sm:line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs
                                   rounded-full bg-black/40 text-emerald-400
                                   border border-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.git && (
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-neutral-300
                                 hover:text-emerald-400 transition-colors"
                    >
                      View GitHub
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-6 py-3 rounded-lg
                       bg-emerald-500 text-white border border-emerald-500
                       hover:bg-emerald-600 transition-colors"
          >
            {showAll ? "View Less Projects" : "View More Projects"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
