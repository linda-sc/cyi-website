export default function Alumni() {
  return (
    <div className="alumni-page">
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Alumni
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome back! Stay connected with the Chinatown Youth Initiatives
            community.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome Back
            </h2>
            <p className="text-gray-600 mb-6">
              We're excited to reconnect with our alumni community.
            </p>
            <a
              href="/alumni/welcome-back"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Welcome Message
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Update Your Information
            </h2>
            <p className="text-gray-600 mb-6">
              Keep us updated with your current contact information.
            </p>
            <a
              href="/alumni/update-contact-information"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Update Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
