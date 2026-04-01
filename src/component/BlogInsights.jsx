import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";

const blogPosts = [
  {
    tag: "Development",
    readTime: "5 min read",
    title: "Modern Web Development Practices in 2024",
    description:
      "Exploring the latest trends and best practices in modern web development, from performance optimization to user experience.",
    image: "https://placehold.co/600x400/111827/10b981?text=Web+Dev",
    link: "https://github.com/Amanhost",
  },
  {
    tag: "Performance",
    readTime: "8 min read",
    title: "Advanced Performance Optimization Techniques",
    description:
      "Deep dive into advanced techniques for optimizing web application performance and improving user experience.",
    image: "https://placehold.co/600x400/111827/10b981?text=Performance",
    link: "https://github.com/Amanhost",
  },
  {
    tag: "AI & ML",
    readTime: "6 min read",
    title: "AI Integration in Modern Web Applications",
    description:
      "Exploring how artificial intelligence is reshaping the landscape of web development and user interactions.",
    image: "https://placehold.co/600x400/111827/10b981?text=AI+Dev",
    link: "https://github.com/Amanhost",
  },
];

const BlogInsights = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://formspree.io/f/your_form_id", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("Subscribed successfully!");
        setEmail("");
      } else {
        setStatus("Subscription failed. Try again.");
      }
    } catch {
      setStatus("Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <SectionWrapper id="blog_insights">
      <SectionHeader
        accent="Writing"
        title="Blog & Insights"
        subtitle="Sharing knowledge and experiences from my development journey"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.article
            key={index}
            className="group rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
                  {post.tag}
                </span>
                <span className="text-neutral-500 text-xs">{post.readTime}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-montserrat group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                {post.description}
              </p>
              <a
                href={post.link}
                className="inline-flex items-center gap-2 text-emerald-400 text-sm hover:text-emerald-300 transition-colors"
              >
                <span>Read More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Newsletter */}
      <motion.div
        className="mt-16 p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.06]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-white mb-3 font-montserrat">
            Subscribe to My Newsletter
          </h3>
          <p className="text-neutral-400 text-sm mb-6">
            Get the latest insights and development tips directly in your inbox
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 ${
                loading
                  ? "bg-neutral-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-lg hover:shadow-emerald-500/25"
              }`}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {status && (
            <p className="text-sm mt-4 text-neutral-300">{status}</p>
          )}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default BlogInsights;
