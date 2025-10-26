"use client";

import { aboutContent } from "../easyEdit/aboutContent";

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {aboutContent.hero.title}
          </h1>
          {aboutContent.hero.subtitle && (
            <p className="text-xl text-orange-600 uppercase tracking-wide mb-6">
              {aboutContent.hero.subtitle}
            </p>
          )}
          {aboutContent.hero.description && (
            <p className="text-xl text-gray-600">
              {aboutContent.hero.description}
            </p>
          )}
        </div>
      </section>

      {/* Mission & Vision */}
      {aboutContent.mission && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {aboutContent.mission.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutContent.mission.description}
            </p>
          </div>
        </section>
      )}

      {aboutContent.vision && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {aboutContent.vision.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutContent.vision.description}
            </p>
          </div>
        </section>
      )}

      {/* Values */}
      {aboutContent.values && aboutContent.values.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aboutContent.values.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* History */}
      {aboutContent.history && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our History
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutContent.history}
            </p>
          </div>
        </section>
      )}
    </div>
  );
};
