import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import SectionWrapper from "./ui/SectionWrapper";
import SectionHeader from "./ui/SectionHeader";
import GlassCard from "./ui/GlassCard";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_jq4bzdb",
        "template_svh44jv",
        e.target,
        "7h2zVXJfRRrsMfrqg",
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
        },
        () => {
          setStatus("Failed to send message. Please try again.");
          setLoading(false);
        },
      );
  };

  const whatsappMessage = `Hello, my name is ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
  const fwWhatsAppLink = `https://wa.me/918739071486?text=${encodeURIComponent(whatsappMessage)}`;

  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/918739071486",
      icon: <FaWhatsapp className="h-5 w-5" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/Amanhost",
      icon: <FaGithub className="h-5 w-5" />,
    },
  ];

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500/50 transition-colors";

  return (
    <SectionWrapper id="contact_connect">
      <SectionHeader
        accent="Get in Touch"
        title="Let's Connect"
        subtitle="Have a project in mind? Let's discuss how we can work together"
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left side */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-neutral-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let's build something
              amazing together.
            </p>
          </div>

          <GlassCard>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-neutral-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-sm">amanprakash1639@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm">Jaunpur, India</span>
              </div>
            </div>
          </GlassCard>

          <div>
            <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-4">
              Social Links
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.06] text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right side — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <GlassCard>
            <h3 className="text-xl font-semibold text-white mb-6 font-montserrat">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className={inputClasses}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className={inputClasses}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={inputClasses}
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleInputChange}
                className={inputClasses + " resize-none"}
                required
              />

              <motion.button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 ${
                  loading
                    ? "bg-neutral-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-lg hover:shadow-emerald-500/25"
                }`}
                whileHover={!loading ? { scale: 1.01 } : {}}
                whileTap={!loading ? { scale: 0.99 } : {}}
              >
                {loading ? "Sending..." : "Send Email"}
              </motion.button>

              <a
                href={fwWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center px-6 py-3 rounded-xl bg-green-600/80 text-white font-semibold hover:bg-green-600 transition-all border border-green-500/20"
              >
                Send via WhatsApp
              </a>

              {status && (
                <motion.p
                  className="text-sm text-neutral-300 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {status}
                </motion.p>
              )}
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
