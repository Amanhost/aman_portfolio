import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eo5g05q",
        "template_i06qafe",
        e.target,
        "BW6ZLt7WZuZzD9vPy"
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };
  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/918739071486",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.944 11.944 0 0012 0C5.373 0 0 5.373 0 12a11.945 11.945 0 001.844 6.328l-1.202 4.386a.75.75 0 00.933.933l4.386-1.202A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12a11.944 11.944 0 00-3.48-8.52zM12 21.75a9.746 9.746 0 01-5.186-1.479.75.75 0 00-.566-.082l-3.356.92.92-3.356a.75.75 0 00-.082-.566A9.75 9.75 0 1112 21.75zm4.104-6.948l-1.74-.5a.75.75 0 00-.79.218l-.597.697a7.5 7.5 0 01-3.518-3.518l.697-.597a.75.75 0 00.218-.79l-.5-1.74a.75.75 0 00-.72-.528h-1.5a.75.75 0 00-.75.75 9 9 0 009 9 .75.75 0 00.75-.75v-1.5a.75.75 0 00-.528-.72z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/prakash_aman_007",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.5 2C4.462 2 2 4.462 2 7.5v9c0 3.038 2.462 5.5 5.5 5.5h9c3.038 0 5.5-2.462 5.5-5.5v-9c0-3.038-2.462-5.5-5.5-5.5h-9zM12 8.75a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5zm6.75-1.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/Amanhost",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0a12 12 0 00-3.797 23.389c.6.111.818-.261.818-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 016.003 0c2.293-1.552 3.301-1.23 3.301-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12 12 0 0012 0z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/im-aman-prakash",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/yourhandle",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.724 9.936 9.936 0 01-3.127 1.184A4.92 4.92 0 0012 9.036c0 .38.045.76.127 1.122A13.94 13.94 0 011.64 3.162a4.93 4.93 0 001.523 6.573 4.936 4.936 0 01-2.228-.616v.06a4.922 4.922 0 003.95 4.827 4.998 4.998 0 01-2.212.084 4.936 4.936 0 004.604 3.417A9.86 9.86 0 010 21.543a13.92 13.92 0 007.548 2.212c9.053 0 13.998-7.497 13.998-13.998 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
  ];
  return (
    <div id="root">
      <section id="contact_connect" className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Let's Connect
              </h2>
              <p className="text-neutral-400 mb-8">
                Have a project in mind? Let's discuss how we can work together
                to create something amazing.
              </p>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Let's Connect
                </h2>
                <p className="text-neutral-400 mb-8">
                  Have a project in mind? Let's discuss how we can work together
                  to create something amazing.
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-500/10">
                      <svg
                        className="w-6 h-6 text-emerald-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:amanprakash1639@gmail.com"
                        className="text-neutral-400 hover:text-emerald-500 transition-colors duration-300"
                      >
                        amanprakash1639@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-500/10">
                      <svg
                        className="w-6 h-6 text-emerald-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Location
                      </h3>
                      <p className="text-neutral-400">Jaunpur India 222109</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-8">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Connect on Social Media
                    </h3>
                    <div className="flex gap-4">
                      {socialLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                        >
                          <span className="sr-only">{link.name}</span>
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-xl border border-neutral-800 bg-neutral-900">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-400 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:border-emerald-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-400 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:border-emerald-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-neutral-400 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:border-emerald-500"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:border-emerald-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition duration-300"
                >
                  Send Message
                </button>
                {status && <p className="text-white mt-4">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
