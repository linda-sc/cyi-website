"use client";

import { contactContent } from "../easyEdit/contactContent";

export const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {contactContent.title}
          </h1>
          {contactContent.description && (
            <p className="text-xl text-gray-600">
              {contactContent.description}
            </p>
          )}
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Address */}
          {contactContent.address && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Visit Us
              </h2>
              <p className="text-gray-700">
                {contactContent.address.street}
                <br />
                {contactContent.address.city}, {contactContent.address.state}{" "}
                {contactContent.address.zip}
              </p>
            </div>
          )}

          {/* Contact Details */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            {contactContent.phone && (
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Phone:</span>{" "}
                {contactContent.phone}
              </p>
            )}
            {contactContent.email && (
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href={`mailto:${contactContent.email}`}
                  className="text-orange-600 hover:text-orange-700"
                >
                  {contactContent.email}
                </a>
              </p>
            )}
          </div>
        </div>

        {/* Social Media */}
        {contactContent.social && contactContent.social.length > 0 && (
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Connect With Us
              </h2>
              <div className="flex flex-wrap gap-4">
                {contactContent.social.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    {social.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
