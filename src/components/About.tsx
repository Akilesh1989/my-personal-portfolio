'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                With over 12 years of experience in data engineering and analytics, 
                I specialize in building robust data infrastructure and delivering 
                actionable insights that drive business growth.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                My expertise spans across modern data stack implementation, cloud 
                architecture, and advanced analytics solutions. I'm passionate about 
                leveraging cutting-edge technologies to solve complex data challenges.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Core Competencies</h3>
              <ul className="space-y-3">
                {[
                  'ETL Pipeline Development & Optimization',
                  'Cloud Infrastructure (AWS, Azure, GCP)',
                  'Big Data Processing & Analytics',
                  'Data Warehouse Architecture',
                  'Real-time Data Solutions',
                  'Team Leadership & Project Management'
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <svg 
                      className="h-5 w-5 text-purple-500" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 