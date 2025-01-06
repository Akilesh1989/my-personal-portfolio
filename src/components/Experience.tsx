const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Manager | Blue Altair</h3>
            <p className="text-sm text-gray-500 mb-4">09/2022 - Present</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Increased data transformation speed by 40% with SQL to Spark SQL refactoring</li>
              <li>Designed a robust medallion architecture ensuring seamless data flow</li>
              <li>Developed a low-latency streaming architecture for real-time decision-making using Apache Kafka</li>
              <li>Built a scalable pipeline on GCP BigQuery for instant insights</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">Head of Data Science and DevOps | Baaz</h3>
            <p className="text-sm text-gray-500 mb-4">06/2021 - 06/2022</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Improved customer satisfaction by 25% through real-time NLP sentiment analysis</li>
              <li>Built recommendation engines for personalized customer experiences</li>
              <li>Enhanced user experience by optimizing front-end performance with real-time image compression</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">Senior Data Service Engineer | Dataspark</h3>
            <p className="text-sm text-gray-500 mb-4">02/2020 - 06/2021</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Reduced SQL processing time by 99%, boosting operational efficiency</li>
              <li>Enhanced marketing strategies with advanced customer segmentation models</li>
              <li>Streamlined delivery processes, cutting processing time by 95%</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">Associate Data Science Consultant | Tail Risk Analytics</h3>
            <p className="text-sm text-gray-500 mb-4">06/2017 - 01/2020</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Migrated client systems from AWS to GCP, improving performance and scalability</li>
              <li>Automated pipelines for improved data availability and reduced manual efforts</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">Previous Roles</h3>
            <p className="text-gray-600 mt-2">
              Worked at Dell Services Pvt Ltd, Open Business Solutions Pvt Ltd, Citibank, and Tata Consultancy Services in various data engineering and analytics roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;