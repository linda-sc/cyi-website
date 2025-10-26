export default function Newsroom() {
  return (
    <div className="newsroom-page">
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Newsroom
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Stay updated with our latest news, announcements, and updates from
            Chinatown Youth Initiatives.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Latest Updates
            </h2>
            <p className="text-lg text-gray-700">
              Check back soon for the latest news and announcements from our
              organization.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
