'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-12 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <div className="space-y-12">
          {[
            {
              title: "Manager | Blue Altair",
              period: "09/2022 - Present",
              achievements: [
                "Increased data transformation speed by 40% with SQL to Spark SQL refactoring",
                "Designed a robust medallion architecture ensuring seamless data flow",
                "Developed a low-latency streaming architecture for real-time decision-making using Apache Kafka",
                "Built a scalable pipeline on GCP BigQuery for instant insights"
              ]
            },
            {
              title: "Head of Data Science and DevOps | Baaz",
              period: "06/2021 - 06/2022",
              achievements: [
                "Improved customer satisfaction by 25% through real-time NLP sentiment analysis",
                "Built recommendation engines for personalized customer experiences",
                "Enhanced user experience by optimizing front-end performance with real-time image compression"
              ]
            },
            // Add more experiences...
          ].map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-purple-500/20"
            >
              <div className="absolute w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full -left-[9px] top-0" />
              <h3 className="text-xl font-bold text-white">{job.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{job.period}</p>
              <ul className="list-none space-y-2">
                {job.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="text-gray-300 flex items-start space-x-2"
                  >
                    <span className="text-purple-500 mt-1">•</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;