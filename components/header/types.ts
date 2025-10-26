import { ReactNode } from "react";

export interface NavLink {
  name: string;
  linkHref: string;
  sourceName: string;
  PreviewImage?: ReactNode;
}

export interface NavItem {
  name: string;
  linkHref?: string;
  sourceName?: string;
  links?: NavLink[];
}

export interface HeaderProps {
  source: string;
  isMenuOpen?: boolean;
  toggleMenu?: () => void;
  navItems: NavItem[];
}

