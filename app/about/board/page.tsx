export default function BoardOfDirectors() {
  return (
    <div className="board-page">
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Board of Directors
          </h1>
          <p className="text-xl text-gray-600">
            Meet the dedicated leaders guiding Chinatown Youth Initiatives.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Leadership
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto">
            Our board members bring diverse expertise and a shared commitment to
            empowering Chinatown youth and strengthening our community.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600">
              Board member profiles coming soon. Check back for updates on our
              dedicated leadership team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
