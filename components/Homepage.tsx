"use client";

import { homepageContent, HomepageSection } from "../easyEdit/homepageContent";
import { Carousel } from "./Carousel";
import { carouselImages } from "../easyEdit/carouselImages";
import Link from "next/link";

const renderSection = (section: HomepageSection, index: number) => {
  switch (section.type) {
    case "hero":
      return (
        <section
          key={section.id}
          className="hero-section py-20 px-4 bg-gradient-to-br from-orange-50 to-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            {section.subtitle && (
              <p className="text-lg text-orange-600 uppercase tracking-wide mb-4">
                {section.subtitle}
              </p>
            )}
            {section.title && (
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {section.title}
              </h1>
            )}
            {section.description && (
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                {section.description}
              </p>
            )}
            {section.ctaText && section.ctaLink && (
              <Link
                href={section.ctaLink}
                className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                {section.ctaText}
              </Link>
            )}
          </div>
        </section>
      );

    case "carousel":
      return (
        <section
          key={section.id}
          className="carousel-section py-20 px-4 bg-white"
        >
          <div className="max-w-6xl mx-auto">
            {section.title && (
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                {section.title}
              </h2>
            )}
            {section.description && (
              <p className="text-lg text-gray-600 mb-8 text-center">
                {section.description}
              </p>
            )}
            <div className="mt-8">
              <Carousel
                images={carouselImages}
                autoPlay={true}
                interval={5000}
              />
            </div>
          </div>
        </section>
      );

    case "about":
      return (
        <section key={section.id} className="about-section py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {section.title && (
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                {section.title}
              </h2>
            )}
            {section.description && (
              <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
                {section.description}
              </p>
            )}
          </div>
        </section>
      );

    case "programs":
      return (
        <section
          key={section.id}
          className="programs-section py-20 px-4 bg-gray-50"
        >
          <div className="max-w-6xl mx-auto">
            {section.title && (
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                {section.title}
              </h2>
            )}
            {section.description && (
              <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                {section.description}
              </p>
            )}
            {section.items && section.items.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      );

    case "cta":
      return (
        <section
          key={section.id}
          className="cta-section py-20 px-4 bg-gradient-to-br from-orange-500 to-orange-600"
        >
          <div className="max-w-4xl mx-auto text-center">
            {section.title && (
              <h2 className="text-4xl font-bold text-white mb-6">
                {section.title}
              </h2>
            )}
            {section.description && (
              <p className="text-xl text-white mb-8 opacity-90">
                {section.description}
              </p>
            )}
            {section.ctaText && section.ctaLink && (
              <Link
                href={section.ctaLink}
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {section.ctaText}
              </Link>
            )}
          </div>
        </section>
      );

    default:
      return null;
  }
};

export const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      {homepageContent.map((section, index) => renderSection(section, index))}
    </div>
  );
};
