import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

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
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
        },
        () => {
          setStatus("❌ Failed to send message. Please try again.");
          setLoading(false);
        },
      );
  };

  const whatsappMessage = `Hello, my name is ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}`;

  const fwWhatsAppLink = `https://wa.me/918739071486?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/918739071486",
      icon: <FaWhatsapp className="h-6 w-6" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/Amanhost",
      icon: <FaGithub className="h-6 w-6" />,
    },
  ];

  return (
    <section id="contact_connect" className="py-24 section">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-neutral-400 mb-8">
            Have a project in mind? Let's discuss!
          </p>

          <div className="pt-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              Social Links
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-neutral-800 text-neutral-400 hover:bg-emerald-500 hover:text-white transition"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="p-8 rounded-xl border border-neutral-800 section">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white"
              required
            />

            {/* ✅ EMAIL BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-3 rounded-lg text-white font-semibold transition 
                          ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-emerald-500 hover:bg-emerald-600"}`}
            >
              {loading ? "Sending Message..." : "Send Email"}
            </button>

            {/* ✅ WHATSAPP BUTTON */}
            <a
              href={fwWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Send via WhatsApp
            </a>

            {status && <p className="text-white">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
