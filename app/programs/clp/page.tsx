export default function ChinatownLiteracyProject() {
  return (
    <div className="clp-page">
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Chinatown Literacy Project
          </h1>
          <p className="text-xl text-gray-600">
            Promoting literacy and educational opportunities in our community.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Program Overview
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              The Chinatown Literacy Project provides free tutoring, reading
              workshops, and educational resources to support literacy
              development for youth and adults in our community.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Our Services
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>One-on-one tutoring sessions</li>
              <li>Reading and writing workshops</li>
              <li>Access to educational resources and books</li>
              <li>Community library services</li>
              <li>ESL support for adults</li>
            </ul>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Interested in Our Programs?
            </h3>
            <p className="text-gray-700 mb-4">
              Learn more about how to participate or volunteer.
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
