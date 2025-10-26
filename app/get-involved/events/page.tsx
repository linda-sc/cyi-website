export default function Events() {
  return (
    <div className="events-page">
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Events
          </h1>
          <p className="text-xl text-gray-600">
            Join us for exciting community events throughout the year.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Upcoming Events
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Chinatown Beautification Day
              </h3>
              <p className="text-gray-600 mb-4">
                Our annual community cleanup and beautification event. Join us
                to make our neighborhood shine!
              </p>
              <a
                href="/programs/cbd"
                className="text-orange-600 hover:text-orange-700 font-semibold"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
