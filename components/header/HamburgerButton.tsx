"use client";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button
      className="ml-auto md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span
        className={`block w-5 h-0.5 rounded-full bg-blue-100 transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`block w-5 h-0.5 rounded-full bg-blue-100 transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block w-5 h-0.5 rounded-full bg-blue-100 transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </button>
  );
};

