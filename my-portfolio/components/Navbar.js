"use client";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-4 bg-gray-900 text-white">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="hover:underline">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
