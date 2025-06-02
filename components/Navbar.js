"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projekte" },
  { href: "/about", label: "Über mich" },
  { href: "/skills", label: "Skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-gray-900 text-gray-300 p-4 transition-colors duration-300 hover:bg-black"
      // Hover auf ganze Navbar: Hintergrund wird schwarz
    >
      {/* Mobile Menü Button */}
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

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="flex flex-col mt-2 space-y-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg px-4 py-2 rounded hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center gap-8 text-lg">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-3 py-2 rounded text-gray-300 hover:text-white transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
