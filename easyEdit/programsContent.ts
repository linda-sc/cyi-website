export interface Program {
  id: string;
  title: string;
  description: string;
  highlights?: string[];
  ctaText?: string;
  ctaLink?: string;
}

export const programsContent: Program[] = [
  {
    id: "slc",
    title: "Summer Leadership Institute",
    description:
      "A comprehensive leadership development program that equips youth with the skills, knowledge, and confidence to become community leaders.",
    highlights: [
      "6-week intensive program",
      "Leadership workshops",
      "Community project development",
      "Mentorship opportunities",
    ],
    ctaText: "Learn More",
    ctaLink: "/programs/slc",
  },
  {
    id: "clp",
    title: "Chinatown Literacy Project",
    description:
      "Promoting literacy and educational opportunities through tutoring, workshops, and educational resources for youth and community members.",
    highlights: [
      "One-on-one tutoring",
      "Reading workshops",
      "Educational resources",
      "Community library access",
    ],
    ctaText: "Get Involved",
    ctaLink: "/programs/clp",
  },
  {
    id: "cbd",
    title: "Chinatown Beautification Day",
    description:
      "Annual community event bringing residents together to beautify our neighborhood through cleanup, murals, and community art projects.",
    highlights: [
      "Annual event",
      "Community volunteers",
      "Public art projects",
      "Neighborhood improvement",
    ],
    ctaText: "Join Us",
    ctaLink: "/programs/cbd",
  },
  {
    id: "ccb",
    title: "Chinatown Community Builders",
    description:
      "Youth-led initiatives that strengthen community bonds through service projects, events, and collaborative programs.",
    highlights: [
      "Youth-led projects",
      "Community engagement",
      "Service learning",
      "Peer mentorship",
    ],
    ctaText: "Learn More",
    ctaLink: "/programs/ccb",
  },
];
