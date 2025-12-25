"use client";

import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    "About",
    "Help",
    "Press",
    "API",
    "Jobs",
    "Privacy",
    "Terms",
    "Locations",
    "Language",
  ];

  return (
    <footer className="py-12 px-4 text-center">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
        {footerLinks.map((link) => (
          <Link
            key={link}
            href="#"
            className="text-[10px] font-bold text-gray-500 hover:text-nothing-red uppercase tracking-widest transition-colors duration-300"
          >
            {link}
          </Link>
        ))}
      </div>
      <div className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} INSTAGRAM BY NOTHING
      </div>
    </footer>
  );
}
