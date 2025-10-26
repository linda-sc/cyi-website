export default function ChinatownCommunityBuilders() {
  return (
    <div className="ccb-page">
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Chinatown Community Builders
          </h1>
          <p className="text-xl text-gray-600">
            Youth-led initiatives to strengthen community bonds.
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
              Chinatown Community Builders is our youth-led program that
              empowers young people to identify community needs and develop
              their own service projects to address them.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              What You'll Do
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Identify community needs and opportunities</li>
              <li>Design and plan service projects</li>
              <li>Lead community engagement initiatives</li>
              <li>Collaborate with local organizations</li>
              <li>Mentor peers and younger students</li>
            </ul>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Get Involved
            </h3>
            <p className="text-gray-700 mb-4">
              This program runs year-round with new cohorts starting quarterly.
            </p>
            <a
              href="/get-involved/youth-opportunities"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
