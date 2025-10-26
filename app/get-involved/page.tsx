export default function GetInvolved() {
  return (
    <div className="get-involved-page">
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Make a difference in the Chinatown community. There are many ways to
            get involved.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Youth Opportunities
            </h2>
            <p className="text-gray-600 mb-6">
              Explore programs and opportunities designed specifically for
              youth.
            </p>
            <a
              href="/get-involved/youth-opportunities"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Learn More
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Events</h2>
            <p className="text-gray-600 mb-6">
              Join us at our upcoming community events and activities.
            </p>
            <a
              href="/get-involved/events"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              View Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
