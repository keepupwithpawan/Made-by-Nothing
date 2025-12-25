"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Home,
  Search,
  Compass,
  Tv,
  MessageCircle,
  Heart,
  PlusSquare,
  Sun,
  Moon,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-nothing-hover text-nothing-text hover:text-nothing-red transition-colors"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export default function Sidebar() {
  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Search", icon: Search, href: "/search" },
    { name: "Explore", icon: Compass, href: "/explore" },
    { name: "Reels", icon: Tv, href: "/reels" },
    { name: "Messages", icon: MessageCircle, href: "/direct/inbox" },
    { name: "Notifications", icon: Heart, href: "/notifications" },
    { name: "Create", icon: PlusSquare, href: "/create" },
  ];

  return (
    <div className="fixed hidden md:flex flex-col w-72 h-full border-r border-nothing-border bg-nothing-bg text-nothing-text p-4 pt-8 z-50 transition-colors duration-300">
      <Link href="/" className="mb-10 px-2 group">
        <h1 className="text-4xl tracking-widest group-hover:text-nothing-red transition-colors duration-300 font-billabong">
          Instagram
        </h1>
      </Link>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-nothing-hover group transition-all duration-300"
          >
            <item.icon
              className="w-6 h-6 group-hover:text-nothing-red transition-colors duration-300"
              strokeWidth={1.5}
            />
            <span className="text-md group-hover:translate-x-1 transition-transform duration-300">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-4 border-t border-nothing-border">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-[url('/profile.jpg')] bg-cover bg-center border border-nothing-border group-hover:border-nothing-red transition-colors duration-300"></div>
            <div className="flex flex-col tracking-wider">
              <span className="text-sm group-hover:text-nothing-red transition-colors">
                keepupwithpawan
              </span>
              <span className="text-xs opacity-60">Pawan Kamat</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
