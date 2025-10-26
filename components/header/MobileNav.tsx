"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderProps } from "./types";

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

export const MobileNav: React.FC<HeaderProps> = ({ isMenuOpen, navItems }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div
      className={`md:hidden overflow-hidden fixed top-14 left-0 right-0 bg-white transition-all cursor-pointer duration-300 ease-in-out ${
        isMenuOpen ? "max-h-screen" : "max-h-0"
      }`}
    >
      <nav className="flex flex-col p-4">
        {navItems.map((item) => {
          const isActiveLink = item.linkHref
            ? isActive(item.linkHref)
            : item.links?.some((link) => isActive(link.linkHref)) || false;

          const hasNestedLinks = item.links && item.links.length > 0;
          const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

          return (
            <div
              key={item.name}
              className="border-t border-gray-200 first:border-t-0"
            >
              <div
                className={`text-sm uppercase flex justify-between items-center mono-font text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-gray-900 py-3 px-4 rounded-md ${
                  isActiveLink ? "text-gray-900 bg-gray-50" : "text-gray-700"
                } ${item.linkHref ? "" : "cursor-pointer"}`}
                onClick={
                  item.linkHref
                    ? undefined
                    : () => setIsSubMenuOpen(!isSubMenuOpen)
                }
              >
                {item.linkHref ? (
                  <Link
                    href={item.linkHref}
                    className="flex-1"
                    onClick={(e) => {
                      if (hasNestedLinks && isSubMenuOpen) {
                        e.preventDefault();
                        setIsSubMenuOpen(false);
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span>{item.name}</span>
                )}
                {hasNestedLinks && (
                  <button
                    onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                    className="ml-2"
                  >
                    <span
                      className={`text-xs transition-transform duration-300 ${
                        isSubMenuOpen ? "rotate-180" : ""
                      }`}
                    >
                      <CaretIcon className="text-gray-700" />
                    </span>
                  </button>
                )}
              </div>

              {hasNestedLinks && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isSubMenuOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {item.links?.map((link) => (
                    <Link key={link.name} href={link.linkHref}>
                      <div className="pl-8 flex items-center gap-0">
                        {link.PreviewImage && <div>{link.PreviewImage}</div>}
                        <span
                          className={`block text-sm mono-font pl-4 py-3 px-4 rounded-md transition-colors duration-200 hover:bg-gray-50 hover:text-gray-900 ${
                            isActive(link.linkHref)
                              ? "text-gray-900 bg-gray-50"
                              : "text-gray-700"
                          }`}
                        >
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
    </div>
  );
};
