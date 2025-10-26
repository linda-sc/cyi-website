export interface AboutContent {
  hero: {
    title: string;
    subtitle?: string;
    description?: string;
  };
  mission?: {
    title: string;
    description: string;
  };
  vision?: {
    title: string;
    description: string;
  };
  values?: Array<{
    title: string;
    description: string;
  }>;
  history?: string;
}

export const aboutContent: AboutContent = {
  hero: {
    title: "About Chinatown Youth Initiatives",
    subtitle: "By Youth, For Youth",
    description:
      "Chinatown Youth Initiatives empowers young leaders to develop new programs, run workshops, and design curriculums.",
  },
  mission: {
    title: "Our Mission",
    description:
      "To empower youth in Chinatown by providing leadership opportunities, educational support, and community engagement programs that foster personal growth and community development.",
  },
  vision: {
    title: "Our Vision",
    description:
      "A vibrant Chinatown where youth are equipped with the skills, knowledge, and confidence to lead positive change and contribute meaningfully to their community.",
  },
  values: [
    {
      title: "Youth Leadership",
      description: "We believe in the power of young people to drive change.",
    },
    {
      title: "Community First",
      description:
        "Everything we do is grounded in serving our Chinatown community.",
    },
    {
      title: "Education & Empowerment",
      description:
        "We provide tools and opportunities for youth to reach their potential.",
    },
  ],
  history:
    "Chinatown Youth Initiatives was founded to address the unique needs and opportunities for youth in Manhattan's Chinatown. We've grown from a small volunteer organization to a community cornerstone, running multiple programs that serve hundreds of youth annually.",
};
