import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="py-16 section text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">My Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src="/path/to/blog-post-image.jpg"
              alt="Blog 1"
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Blog Post 1</h3>
              <p className="text-gray-300">
                A short snippet of the blog post content.
              </p>
              <a
                href="https://github.com/amanprakash"
                className="text-blue-500 hover:text-blue-400"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src="/path/to/blog-post-image.jpg"
              alt="Blog 2"
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Blog Post 2</h3>
              <p className="text-gray-300">
                A short snippet of the blog post content.
              </p>
              <a
                href="https://github.com/amanprakash"
                className="text-blue-500 hover:text-blue-400"
              >
                Read more
              </a>
            </div>
          </div>
          {/* Add more blog posts as needed */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
