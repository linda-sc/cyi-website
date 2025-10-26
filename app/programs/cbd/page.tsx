export default function ChinatownBeautificationDay() {
  return (
    <div className="cbd-page">
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Chinatown Beautification Day
          </h1>
          <p className="text-xl text-gray-600">
            Annual community event to beautify and improve our neighborhood.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Event Overview
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Chinatown Beautification Day is our annual community-wide event
              where residents, volunteers, and local organizations come together
              to clean up, beautify, and revitalize public spaces in Chinatown.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              What We Do
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Neighborhood cleanup and trash removal</li>
              <li>Murals and public art installations</li>
              <li>Planting trees and flowers</li>
              <li>Community garden maintenance</li>
              <li>Street beautification projects</li>
            </ul>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Join Us Next Year
            </h3>
            <p className="text-gray-700 mb-4">
              This event typically happens in the spring. Stay tuned for details
              and registration information.
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
