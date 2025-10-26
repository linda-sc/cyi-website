"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderProps, NavItem } from "./types";

// Simple caret icon component
const CaretIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 8L1 4L9 4L5 8Z" fill="currentColor" />
  </svg>
);

export const DesktopNav: React.FC<HeaderProps> = ({ navItems }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="hidden md:flex h-full ml-auto gap-6 flex-row bg-transparent p-0">
      {navItems.map((item) => {
        const isActiveLink = item.linkHref
          ? isActive(item.linkHref)
          : item.links?.some((link) => isActive(link.linkHref)) || false;

        const hasNestedLinks = item.links && item.links.length > 0;
        const [isHovered, setIsHovered] = useState(false);

        const innerContent = (
          <div
            className={`text-sm uppercase mono-font flex items-center text-gray-700 transition-colors duration-200 cursor-pointer hover:bg-gray-100 hover:text-gray-900 py-2 px-4 rounded-md ${
              isActiveLink ? "text-gray-900 bg-gray-100" : "text-gray-700"
            }`}
          >
            {item.name}
            {hasNestedLinks && (
              <span className="ml-1">
                <CaretIcon />
              </span>
            )}
          </div>
        );

        return (
          <div
            key={item.name}
            className="relative flex items-center h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {item.linkHref ? (
              <Link href={item.linkHref} className="flex items-center h-full">
                {innerContent}
              </Link>
            ) : (
              <div className="flex items-center h-full cursor-pointer">
                {innerContent}
              </div>
            )}

            {hasNestedLinks && isHovered && (
              <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg py-2 px-4 gap-1 flex flex-col">
                {item.links?.map((link) => (
                  <Link key={link.name} href={link.linkHref}>
                    <div
                      className={`flex-row flex items-center gap-2 px-1 hover:bg-gray-50 hover:text-gray-900 hover:scale-105 rounded-md transition-all cursor-pointer duration-100 whitespace-nowrap ${
                        isActive(link.linkHref)
                          ? "text-gray-900 bg-gray-50"
                          : "text-gray-700"
                      }`}
                    >
                      {link.PreviewImage && (
                        <div className="w-10">{link.PreviewImage}</div>
                      )}
                      <span className={`flex px-2 py-2 text-sm mono-font `}>
                        {link.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};
