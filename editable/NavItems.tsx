import { NavItem } from "../components/header/types";

export const navItems: NavItem[] = [
  { name: "Home", linkHref: "/", sourceName: "home" },
  {
    name: "About",
    links: [
      {
        name: "Our Story",
        linkHref: "/about/story",
        sourceName: "our-story",
      },
      {
        name: "Board of Directors",
        linkHref: "/about/board",
        sourceName: "board-of-directors",
      },
    ],
  },
  {
    name: "Programs",
    links: [
      {
        name: "Our Programs",
        linkHref: "/programs/current",
        sourceName: "current-programs",
      },
      {
        name: "Summer Leadership Institute",
        linkHref: "/programs/slc",
        sourceName: "slc",
      },
      {
        name: "Chinatown Literacy Project",
        linkHref: "/programs/clp",
        sourceName: "clp",
      },
      {
        name: "Chinatown Beautification Day",
        linkHref: "/programs/cbd",
        sourceName: "cbd",
      },
      {
        name: "Chinatown Community Builders",
        linkHref: "/programs/ccb",
        sourceName: "ccb",
      },
    ],
  },
  {
    name: "Partnerships",
    links: [
      {
        name: "Become a Partner",
        linkHref: "/partnerships/join",
        sourceName: "become-partner",
      },
      {
        name: "Current Partners",
        linkHref: "/partnerships/current",
        sourceName: "current-partners",
      },
    ],
  },
  {
    name: "Get Involved",
    links: [
      {
        name: "Volunteer",
        linkHref: "/get-involved/volunteer",
        sourceName: "volunteer",
      },
      {
        name: "Donate",
        linkHref: "/get-involved/donate",
        sourceName: "donate",
      },
      {
        name: "Events",
        linkHref: "/get-involved/events",
        sourceName: "events",
      },
    ],
  },
  {
    name: "Alumni",
    links: [
      {
        name: "Alumni Network",
        linkHref: "/alumni/network",
        sourceName: "alumni-network",
      },
      {
        name: "Alumni Stories",
        linkHref: "/alumni/stories",
        sourceName: "alumni-stories",
      },
    ],
  },
  { name: "Contact", linkHref: "/contact", sourceName: "contact" },
];
