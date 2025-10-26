export default function SummerLeadershipInstitute() {
  return (
    <div className="slc-page">
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Summer Leadership Institute
          </h1>
          <p className="text-xl text-gray-600">
            A comprehensive 6-week leadership development program for youth.
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
              The Summer Leadership Institute (SLI) is our flagship program
              designed to equip young leaders with the skills, knowledge, and
              confidence they need to make a positive impact in their community.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              What You'll Learn
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Leadership fundamentals and team building</li>
              <li>Community organizing and advocacy</li>
              <li>Public speaking and presentation skills</li>
              <li>Project planning and execution</li>
              <li>Mentorship and peer support</li>
            </ul>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Ready to Apply?
            </h3>
            <p className="text-gray-700 mb-4">
              Applications for our next cohort will open in the spring.
            </p>
            <a
              href="/get-involved/youth-opportunities"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
