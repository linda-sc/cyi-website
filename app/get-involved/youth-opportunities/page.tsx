export default function YouthOpportunities() {
  return (
    <div className="youth-opportunities-page">
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Youth Opportunities
          </h1>
          <p className="text-xl text-gray-600">
            Discover how you can get involved and make a difference.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Available Opportunities
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Summer Leadership Institute
              </h3>
              <p className="text-gray-600 mb-4">
                Join our 6-week leadership development program this summer.
              </p>
              <a
                href="/programs/slc"
                className="text-orange-600 hover:text-orange-700 font-semibold"
              >
                Learn More →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Volunteer Opportunities
              </h3>
              <p className="text-gray-600 mb-4">
                Help organize events, tutor students, or assist with community
                projects.
              </p>
              <a
                href="/contact"
                className="text-orange-600 hover:text-orange-700 font-semibold"
              >
                Get Started →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
