'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
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
    {
      title: "Senior Data Service Engineer | Dataspark",
      period: "02/2020 - 06/2021",
      location: "Singapore",
      achievements: [
        "Reduced SQL processing time by 99%, cutting execution from 10 hours to 8 minutes through optimized scripting",
        "Boosted marketing campaign effectiveness by creating advanced customer segmentation models",
        "Cut delivery time by 95%, streamlining processes from 8 hours to 25 minutes"
      ]
    },
    {
      title: "Associate Data Science Consultant | Tail Risk Analytics",
      period: "06/2017 – 01/2020",
      achievements: [
        "Built and maintained data pipelines for one of the world's top 4 telecom providers ensuring 99% uptime",
        "Migrated data from AWS to BigQuery to enhance data analysis speed and efficiency",
        "Maintained and optimized data pipelines running in Amazon EMR, ensuring seamless data flow"
      ]
    },
    {
      title: "Senior Application Management Analyst | Dell Services Pvt Ltd",
      period: "03/2016 – 06/2017",
      location: "Singapore",
      achievements: [
        "Engaged with multiple stakeholders to assess the need for and feasibility of introducing a container orchestration platform",
        "Mentored associates and provided technical leadership to the team"
      ]
    },
    {
      title: "Business Analyst | Open Business Solutions Pvt Ltd",
      period: "11/2014 – 02/2016",
      location: "Singapore",
      achievements: [
        "Created proposals and pitches to present our product to potential clients",
        "Supported developers with queries and concerns regarding the project"
      ]
    },
    {
      title: "Business Process Analyst | Citibank",
      period: "11/2013 – 05/2014",
      location: "Singapore",
      achievements: [
        "Identified, documented, and analyzed current systems & processes",
        "Recommended improvements by linking parallel activities, automating tasks, and outsourcing non-critical path activities"
      ]
    },
    {
      title: "Assistant Systems Engineer | Tata Consultancy Services",
      period: "12/2011 – 07/2013",
      location: "Chennai, India",
      achievements: [
        "Modified existing CAD models to suit client's needs",
        "Mentored new associates and provided technical support"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <motion.h2 
            className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-purple-500/20"
          >
            <span className="text-gray-300">Total Experience: </span>
            <span className="text-purple-400 font-semibold">12+ Years</span>
          </motion.div>
        </div>
        <div className="space-y-12">
          {experiences.map((job, index) => (
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
              <p className="text-sm text-gray-400 mb-1">{job.period}</p>
              {job.location && (
                <p className="text-sm text-purple-400 mb-4">{job.location}</p>
              )}
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