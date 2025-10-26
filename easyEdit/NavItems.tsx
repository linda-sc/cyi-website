import { NavItem } from "../components/header/types";

export const navItems: NavItem[] = [
  { name: "HOME", linkHref: "/", sourceName: "home" },
  {
    name: "ABOUT",
    linkHref: "/about",
    links: [
      {
        name: "Newsroom",
        linkHref: "/about/newsroom",
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
    name: "PROGRAMS",
    linkHref: "/programs",
    links: [
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
    name: "PARTNERSHIPS",
    linkHref: "/partnerships",
    links: [
      {
        name: "OCA-NY's HCPP",
        linkHref: "/partnerships/oca-ny-hcpp",
        sourceName: "oca-ny-hcpp",
      },
    ],
  },
  {
    name: "GET INVOLVED",
    linkHref: "/get-involved",
    links: [
      {
        name: "Youth Opportunities",
        linkHref: "/get-involved/youth-opportunities",
        sourceName: "youth-opportunities",
      },
      {
        name: "Events",
        linkHref: "/get-involved/events",
        sourceName: "events",
      },
    ],
  },
  {
    name: "ALUMNI",
    linkHref: "/alumni",
    links: [
      {
        name: "Welcome Back",
        linkHref: "/alumni/welcome-back",
        sourceName: "welcome-back",
      },
      {
        name: "Update Contact Information",
        linkHref: "/alumni/update-contact-information",
        sourceName: "update-contact-information",
      },
    ],
  },
  { name: "CONTACT", linkHref: "/contact", sourceName: "contact" },
];
