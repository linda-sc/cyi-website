export default function OCAHCPP() {
  return (
    <div className="oca-hcpp-page">
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            OCA-NY's HCPP
          </h1>
          <p className="text-xl text-gray-600">
            Partnership with OCA-NY's Hate Crimes Prevention Program.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About</h2>
          <p className="text-lg text-gray-700 mb-6">
            We partner with OCA-NY (Organization of Chinese Americans - New
            York) to support their Hate Crimes Prevention Program (HCPP),
            providing youth engagement and educational resources to combat hate
            crimes in our community.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Get Involved
            </h3>
            <p className="text-gray-600 mb-4">
              Learn more about how you can support hate crime prevention in our
              community.
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
