'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaMedium, FaYoutube, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';

const Hero = () => {
  const handleDownloadResume = () => {
    const resumeUrl = 'https://pub-9af44a31933d40568325d6dd74978164.r2.dev/Akilesh%20Anandharaj%20Resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  const socialLinks = [
    { href: "https://linkedin.com/in/akilesh", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "https://github.com/akilesh", icon: <FaGithub />, label: "GitHub" },
    { href: "https://medium.com/@akilesh", icon: <FaMedium />, label: "Medium" },
    { href: "https://youtube.com/@akilesh", icon: <FaYoutube />, label: "YouTube" },
    { href: "https://akilesh.com", icon: <FaGlobe />, label: "Website" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Akilesh Anandharaj
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            With a decade of experience in data engineering and cloud solutions,
            I help organizations build scalable data infrastructure and derive meaningful insights.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-purple-400 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            ))}
          </motion.div>

          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={handleDownloadResume}
              className="group relative px-8 py-3 overflow-hidden rounded-full border border-purple-500 text-white font-medium hover:scale-105 transition-transform"
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;