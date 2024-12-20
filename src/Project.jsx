import React from "react";

const Project = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src="/path/to/project-image.jpg"
              alt="Project 1"
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Project 1</h3>
              <p className="text-gray-700">
                A short description of the project.
              </p>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src="/path/to/project-image.jpg"
              alt="Project 2"
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Project 2</h3>
              <p className="text-gray-700">
                A short description of the project.
              </p>
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Project;
