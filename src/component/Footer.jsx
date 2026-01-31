import React from "react";

const Footer = () => {
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
      <footer id="footer" className="section text-neutral-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-white text-lg font-semibold">About Me</h3>
              <p className="text-sm">
                Passionate full-stack developer crafting exceptional digital
                experiences with modern technologies and creative solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hover:text-white transition-colors duration-300"
                    target="_blank"
                  >
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/amanprakash"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/amanprakash"
                    className="hover:text-white transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/amanprakash"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/amanprakash"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/amanprakash"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white text-lg font-semibold">Services</h3>
              <ul className="space-y-2">
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>UI/UX Design</li>
                <li>API Integration</li>
                <li>Database Design</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white text-lg font-semibold">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <svg
                    className="h-5 w-5"
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
                  <span>amanprakash1639@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+ (91) 8303299351</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="h-5 w-5"
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
                  <span>Jaunpur India</span>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="mt-12 pt-8 border-t border-neutral-800">
              <p className="text-center text-sm">
                Design and Developed By Aman Prakah.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-neutral-800">
              <p className="text-center text-sm">
                &copy; 2024 Portfolio. All rights reserved. Built with{" "}
                amanprakash1639@gmail.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
