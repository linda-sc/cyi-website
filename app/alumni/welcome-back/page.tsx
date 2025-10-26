export default function WelcomeBack() {
  return (
    <div className="welcome-back-page">
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome Back, Alumni!
          </h1>
          <p className="text-xl text-gray-600">
            We're thrilled to reconnect with our CYI alumni community.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Whether you participated in our Summer Leadership Institute,
              helped out at Chinatown Beautification Day, volunteered with our
              programs, or supported us in any other way – we want you to stay
              connected!
            </p>
            <p>
              As a member of the CYI alumni community, you can help shape the
              future of youth engagement in Chinatown by staying involved,
              mentoring current participants, and sharing your experiences.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Stay Connected
              </h3>
              <p className="text-gray-600 mb-4">
                Update your contact information to receive newsletters and event
                invitations.
              </p>
              <a
                href="/alumni/update-contact-information"
                className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Update Info
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Get Involved
              </h3>
              <p className="text-gray-600 mb-4">
                Come back as a mentor, volunteer, or event participant.
              </p>
              <a
                href="/get-involved/youth-opportunities"
                className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
