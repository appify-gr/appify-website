"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export const FooterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center space-x-1 text-gray-400 hover:text-gray-300 text-sm transition-colors"
      >
        <span>Links</span>
        <FaChevronDown
          className={`text-xs transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-40 bg-gray-700/95 backdrop-blur-md border border-gray-600/50 rounded-lg shadow-xl overflow-hidden">
          <div className="py-2">
            <Link
              href="/downloads"
              onClick={() => setIsOpen(false)}
              className="block  px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-600/50 transition-colors"
            >
              Downloads
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
