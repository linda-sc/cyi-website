export interface ContactInfo {
  title: string;
  description?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone?: string;
  email?: string;
  social?: Array<{
    platform: string;
    url: string;
  }>;
}

export const contactContent: ContactInfo = {
  title: "Contact Us",
  description:
    "We'd love to hear from you. Reach out with questions, ideas, or to get involved.",
  address: {
    street: "123 Chinatown Street",
    city: "New York",
    state: "NY",
    zip: "10013",
  },
  phone: "(212) 555-1234",
  email: "info@cyinyc.org",
  social: [
    { platform: "Facebook", url: "https://facebook.com/cyinyc" },
    { platform: "Instagram", url: "https://instagram.com/cyinyc" },
    { platform: "Twitter", url: "https://twitter.com/cyinyc" },
  ],
};
