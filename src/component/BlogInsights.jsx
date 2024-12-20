import React from "react";

const BlogInsights = () => {
  return (
    <div id="root">
      <section id="blog_insights" className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Blog & Insights
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Sharing knowledge and experiences from my development journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <article className="group rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400?text=Modern+Web+Development"
                  alt="Modern Web Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-sm rounded-full border border-emerald-500/30 text-emerald-500">
                    Development
                  </span>
                  <span className="text-neutral-400 text-sm">5 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Modern Web Development Practices in 2024
                </h3>
                <p className="text-neutral-400 mb-4">
                  Exploring the latest trends and best practices in modern web
                  development, from performance optimization to user experience.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors duration-300"
                >
                  <span>Read More</span>
                  <svg
                    className="w-4 h-4"
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
            </article>

            {/* Blog Post 2 */}
            <article className="group rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400?text=Performance+Optimization"
                  alt="Performance Optimization"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-sm rounded-full border border-emerald-500/30 text-emerald-500">
                    Performance
                  </span>
                  <span className="text-neutral-400 text-sm">8 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Advanced Performance Optimization Techniques
                </h3>
                <p className="text-neutral-400 mb-4">
                  Deep dive into advanced techniques for optimizing web
                  application performance and improving user experience.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors duration-300"
                >
                  <span>Read More</span>
                  <svg
                    className="w-4 h-4"
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
            </article>

            {/* Blog Post 3 */}
            <article className="group rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://placehold.co/600x400?text=AI+in+Development"
                  alt="AI in Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-sm rounded-full border border-emerald-500/30 text-emerald-500">
                    AI & ML
                  </span>
                  <span className="text-neutral-400 text-sm">6 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  AI Integration in Modern Web Applications
                </h3>
                <p className="text-neutral-400 mb-4">
                  Exploring how artificial intelligence is reshaping the
                  landscape of web development and user interactions.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors duration-300"
                >
                  <span>Read More</span>
                  <svg
                    className="w-4 h-4"
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
            </article>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16 p-8 rounded-xl border border-neutral-800 bg-neutral-900">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Subscribe to My Newsletter
              </h3>
              <p className="text-neutral-400 mb-6">
                Get the latest insights and development tips directly in your
                inbox
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogInsights;
