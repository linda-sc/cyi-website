export interface HomepageSection {
  id: string;
  type: "hero" | "about" | "programs" | "features" | "cta" | "carousel";
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  items?: Array<{
    title: string;
    description: string;
    image?: string;
  }>;
}

export const homepageContent: HomepageSection[] = [
  {
    id: "hero",
    type: "hero",
    title: "Welcome to Chinatown Youth Initiatives",
    subtitle: "Empowering Youth. Building Community.",
    description:
      "By youth, for youth. Chinatown Youth Initiatives empowers young leaders to develop new programs, run workshops, and design curriculums.",
    ctaText: "Get Involved",
    ctaLink: "/get-involved/youth-opportunities",
  },
  {
    id: "carousel",
    type: "carousel",
    title: "Our Impact",
    description: "See how we're making a difference in the community",
  },
  {
    id: "about",
    type: "about",
    title: "What We Do",
    description:
      "Chinatown Youth Initiatives empowers young leaders to develop new programs, run workshops, and design curriculums. We believe in the power of youth to drive positive change in our community.",
  },
  {
    id: "programs",
    type: "programs",
    title: "Our Programs",
    description:
      "We offer several programs designed to empower and develop youth leadership in Chinatown.",
    items: [
      {
        title: "Summer Leadership Institute",
        description:
          "A comprehensive leadership development program for youth.",
      },
      {
        title: "Chinatown Literacy Project",
        description:
          "Promoting literacy and educational opportunities in the community.",
      },
      {
        title: "Chinatown Beautification Day",
        description:
          "Annual community event to beautify and improve our neighborhood.",
      },
      {
        title: "Chinatown Community Builders",
        description: "Youth-led initiatives to strengthen community bonds.",
      },
    ],
  },
  {
    id: "get-involved",
    type: "cta",
    title: "Get Involved",
    description:
      "Explore current opportunities and see how you can get involved today.",
    ctaText: "Learn More",
    ctaLink: "/get-involved/youth-opportunities",
  },
];
