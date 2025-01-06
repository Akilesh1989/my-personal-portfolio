'use client';

import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-12 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {[
            {
              degree: "Master of IT in Business",
              school: "Singapore Management University",
              period: "2013 - 2015"
            },
            {
              degree: "B.E. Mechanical Engineering",
              school: "Sri Krishna College of Technology, Coimbatore",
              period: "2007 - 2011"
            }
          ].map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-r from-pink-500/5 to-purple-500/5 border border-purple-500/10"
            >
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-gray-400">{edu.school}</p>
              <p className="text-sm text-purple-400 mt-2">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;