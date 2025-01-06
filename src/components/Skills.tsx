const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Engineering & Analytics</h3>
            <p className="text-gray-600">
              Expertise in ETL pipelines, data warehousing, real-time streaming, data transformation, 
              data partitioning, and query optimization.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Programming & Scripting</h3>
            <p className="text-gray-600">
              Python, SQL, Spark SQL, PySpark, Scala, Bash scripting, BigQuery SQL
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tools</h3>
            <p className="text-gray-600">
              Azure Databricks, Delta Lake, BigQuery, Redshift, Apache Kafka, TensorFlow, 
              SageMaker, EC2, Athena, EKS, Lambda, GCF, Dataflow, Azure Synapse, Databricks, 
              Delta tables
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;