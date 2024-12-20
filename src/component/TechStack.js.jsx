import React from "react";

const TechStack = () => {
  return (
    <section id="techstack" className="py-16 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src="/path/to/react-logo.svg"
              alt="React"
              className="w-16 mx-auto mb-4"
            />
            <p>React.js</p>
          </div>
          <div className="text-center">
            <img
              src="/path/to/javascript-logo.svg"
              alt="JavaScript"
              className="w-16 mx-auto mb-4"
            />
            <p>JavaScript</p>
          </div>
          <div className="text-center">
            <img
              src="/path/to/redux-logo.svg"
              alt="Redux"
              className="w-16 mx-auto mb-4"
            />
            <p>Redux</p>
          </div>
          <div className="text-center">
            <img
              src="/path/to/tailwind-logo.svg"
              alt="Tailwind CSS"
              className="w-16 mx-auto mb-4"
            />
            <p>Tailwind CSS</p>
          </div>
          {/* Add more technologies as needed */}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
