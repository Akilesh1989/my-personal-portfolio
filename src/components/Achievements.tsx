const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Achievements</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Globus Top 25 Performer Worldwide</h3>
            <p className="text-gray-600 mt-2">
              Recognized for developing the best winning strategy in a global competition.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">Outstanding Performance Award</h3>
            <p className="text-gray-600 mt-2">
              Received from Tata Consultancy Services for exceptional contributions and performance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">National Service Scheme Award</h3>
            <p className="text-gray-600 mt-2">
              Honored for dedicated participation and leadership in social service activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;