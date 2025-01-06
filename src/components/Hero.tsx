'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming Data into
            <span className="text-blue-600"> Actionable Insights</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            With over 12 years of experience in data engineering and cloud solutions,
            I help organizations build scalable data infrastructure and derive meaningful insights.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              View Projects
            </button>
            <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
              Download Resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 