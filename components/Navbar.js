"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <--- NEU

const links = [
  { href: "/", label: "Startseite" },
  { href: "/projects", label: "Projekte" },
  { href: "/about", label: "Über mich" },
  { href: "/skills", label: "Skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // <--- NEU

  return (
    <nav className="bg-gray-900 text-gray-300 p-4 transition-colors duration-300 hover:bg-gray-800">
      <div className="flex justify-between items-center md:hidden">
        <div className="text-xl font-bold">Mein Portfolio</div>
        <button
          className="bg-gray-700 px-3 py-1 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü öffnen/schließen"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col mt-2 space-y-2 md:hidden">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg px-4 py-2 rounded transition-colors duration-200
                  ${isActive ? "bg-blue-600 text-white" : "hover:text-white"}
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center gap-8 text-lg">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded transition-colors duration-200
                ${
                  isActive
                    ? "bg-blue-900 text-white"
                    : "text-gray-300 hover:text-blue-500"
                }
              `}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
