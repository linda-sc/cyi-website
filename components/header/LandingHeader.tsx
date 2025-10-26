"use client";

import { useState } from "react";
import Link from "next/link";
import { HamburgerButton } from "./HamburgerButton";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { NavItem } from "./types";

// Simple logo component - you can replace this with your actual logo
const Logo = () => (
  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold shadow-md">
    C
  </div>
);

interface LandingHeaderProps {
  source: string;
  navItems: NavItem[];
}

export const LandingHeader: React.FC<LandingHeaderProps> = ({
  source,
  navItems,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-2 h-14 flex items-center fixed top-0 left-0 right-0 z-50 bg-white mono-font shadow-lg">
      <Link href="/" className="flex items-center">
        <Logo />
      </Link>
      <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
      <DesktopNav navItems={navItems} source={source} />
      <MobileNav isMenuOpen={isMenuOpen} navItems={navItems} source={source} />
    </header>
  );
};
