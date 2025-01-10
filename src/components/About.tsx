'use client';

import { motion } from 'framer-motion';

const ProfessionalSection = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-purple-400">Professional Journey</h3>
    <p className="text-gray-300 leading-relaxed">
      With a decade of experience in data engineering and analytics, 
      I specialize in building robust data infrastructure and delivering 
      actionable insights that drive business growth.
    </p>
    
    <p className="text-gray-300 leading-relaxed">
      My expertise spans across modern data stack implementation, cloud 
      architecture, and advanced analytics solutions. I'm passionate about 
      leveraging cutting-edge technologies to solve complex data challenges.
    </p>

    <div className="space-y-4 mt-6">
      <h4 className="text-lg font-semibold text-white">Professional Competencies</h4>
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
);

const PersonalSection = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-purple-400">Personal Life</h3>
    <p className="text-gray-300 leading-relaxed">
      Beyond the world of data, I'm a proud father of two wonderful children - 
      a curious and energetic 5-year-old boy who keeps me on my toes with endless 
      "why" questions, and a delightful 5-month-old girl whose smiles brighten up 
      my every day.
    </p>
    
    <p className="text-gray-300 leading-relaxed">
      Balancing family life with my passion for technology has taught me invaluable 
      lessons in time management, patience, and the importance of continuous learning. 
      When I'm not coding or spending time with my family, you might find me exploring 
      new technologies or sharing my knowledge with the tech community.
    </p>

    <div className="space-y-4 mt-6">
      <h4 className="text-lg font-semibold text-white">Parenting Superpowers</h4>
      <ul className="space-y-3">
        {[
          'Professional 3 AM Baby Whisperer',
          'Expert Toddler Tantrum Negotiator',
          'Master of One-Handed Typing While Holding Baby',
          'Surviving on 4 Hours of Sleep and Still Coding',
          'Simultaneous Diaper Change & Code Review Expert',
          'Professional "Why?" Question Answerer'
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
              className="h-5 w-5 text-pink-500" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-300">{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <ProfessionalSection />
            <PersonalSection />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;