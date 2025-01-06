'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Data Engineering & Analytics</h3>
            <p className="text-gray-300">
              Expertise in ETL pipelines, data warehousing, real-time streaming, data transformation, 
              data partitioning, and query optimization.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Programming & Scripting</h3>
            <div className="flex flex-wrap gap-3">
              {['Python', 'SQL', 'Spark SQL', 'PySpark', 'Scala', 'Bash', 'BigQuery SQL'].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-purple-500/20 text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Azure Databricks',
                'Delta Lake',
                'BigQuery',
                'Redshift',
                'Apache Kafka',
                'TensorFlow',
                'AWS',
                'GCP',
                'Azure'
              ].map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-purple-500/20 text-gray-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;