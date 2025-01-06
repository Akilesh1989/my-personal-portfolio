'use client';

import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-12 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Globus Top 25 Performer Worldwide",
              description: "Recognized for developing the best winning strategy in a global competition."
            },
            {
              title: "Outstanding Performance Award",
              description: "Received from Tata Consultancy Services for exceptional contributions and performance."
            },
            {
              title: "National Service Scheme Award",
              description: "Honored for dedicated participation and leadership in social service activities."
            }
          ].map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-r from-pink-500/5 to-purple-500/5 border border-purple-500/10"
            >
              <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;