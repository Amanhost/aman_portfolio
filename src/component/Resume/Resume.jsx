import React from "react";
import { Link } from "react-router-dom";
import pdf from "../../../src/Assets/Image/AmanPrakashResume.pdf";

const Resume = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <header className="fixed w-full top-0 z-50 border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-white">
                AMAN<span className="status-emerald">.PRAKASH</span>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Home
              </Link>

              <Link
                to="/resume"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Resume
              </Link>

              <Link
                to="/#contact_connect"
                className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Resume Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-10">
            My <span className="status-emerald">Resume</span>
          </h1>

          {/* Resume Preview */}
          <div className="bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-700">
            <iframe
              src={pdf}
              title="Aman Prakash Resume"
              className="w-full h-[900px] rounded-lg"
            />
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-emerald-500 text-emerald-400 rounded-lg hover:bg-emerald-500 hover:text-white transition"
            >
              Open Resume
            </a>

            <a
              href={pdf}
              download="Aman-Prakash-Resume.pdf"
              className="px-6 py-3 bg-emerald-500 rounded-lg text-white hover:bg-emerald-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
