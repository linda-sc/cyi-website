"use client";

import { programsContent } from "../easyEdit/programsContent";
import Link from "next/link";

export const ProgramsPage: React.FC = () => {
  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-gray-600">
            Empowering youth through innovative programs and opportunities in
            Chinatown.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programsContent.map((program) => (
              <div
                key={program.id}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h2>
                <p className="text-gray-600 mb-6">{program.description}</p>

                {program.highlights && program.highlights.length > 0 && (
                  <ul className="list-disc list-inside mb-6 text-gray-700">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                )}

                {program.ctaText && program.ctaLink && (
                  <Link
                    href={program.ctaLink}
                    className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    {program.ctaText}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
