"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 bg-nothing-bg/80 backdrop-blur-md border-b border-nothing-border z-50 flex items-center justify-center px-2 sm:px-4 transition-colors duration-300">
        <div className="max-w-7xl w-full flex items-center justify-between">
          {/* Logo & Search */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-ndot text-nothing-red tracking-tighter"
            >
              ing<span className="text-nothing-text">.</span>
            </Link>

            {/* Search - Hidden on mobile, icon on tablet, full on desktop */}
            <div className="relative group hidden md:block">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-nothing-text-muted"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-1.5 bg-nothing-input/30 border border-transparent focus:border-nothing-text outline-none font-ntype text-sm w-32 lg:w-48 xl:w-64 transition-all placeholder:text-nothing-text-muted text-nothing-text rounded-sm"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <ul className="flex items-center gap-4 xl:gap-8">
              <NavItem icon="home" label="Home" active />
              <NavItem icon="users" label="My Network" />
              <NavItem icon="briefcase" label="Jobs" />
              <NavItem icon="message-square" label="Messaging" />
              <NavItem icon="bell" label="Notifications" />
            </ul>
            <div className="h-8 w-px bg-nothing-border" />
            <ThemeToggle />
          </div>

          {/* Mobile/Tablet Navigation */}
          <div className="flex xl:hidden items-center gap-3">
            {!isMobileMenuOpen && <ThemeToggle />}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-nothing-text p-2 hover:bg-nothing-card-hover rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-nothing-card border-l border-nothing-border z-50 xl:hidden transition-transform duration-300 overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header with Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-nothing-border shrink-0">
            <h2 className="text-lg font-ndot text-nothing-text">Menu</h2>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-nothing-text p-2 hover:bg-nothing-card-hover rounded-md transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {/* Mobile Search */}
            <div className="relative md:hidden">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-nothing-text-muted"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 bg-nothing-input/30 border border-transparent focus:border-nothing-text outline-none font-ntype text-sm transition-all placeholder:text-nothing-text-muted text-nothing-text rounded-sm"
              />
            </div>

            <div className="h-px bg-nothing-border" />

            {/* Mobile Nav Items */}
            <ul className="flex flex-col gap-2">
              <MobileNavItem
                icon="home"
                label="Home"
                active
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavItem
                icon="users"
                label="My Network"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavItem
                icon="briefcase"
                label="Jobs"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavItem
                icon="message-square"
                label="Messaging"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavItem
                icon="bell"
                label="Notifications"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </ul>

            <div className="h-px bg-nothing-border" />

            {/* Profile Section */}
            <div className="bg-nothing-card-hover rounded-lg p-3 border border-nothing-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-nothing-text flex items-center justify-center text-nothing-bg font-ndot text-sm shrink-0">
                  P
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-nothing-text font-ndot truncate">
                    Pawan Kamat
                  </h3>
                  <p className="text-xs text-nothing-text-muted line-clamp-2 font-ntype">
                    Junior Software Developer at uKnowva HRMS
                  </p>
                </div>
              </div>
              <button className="w-full text-xs font-ntype font-bold bg-nothing-red text-white px-3 py-1.5 rounded-full hover:bg-red-600 transition-all duration-300">
                My Items
              </button>
            </div>

            {/* Puzzles Section */}
            <div className="bg-nothing-card-hover rounded-lg p-3 border border-nothing-border">
              <h3 className="text-base font-bold font-ntype text-nothing-text mb-3">
                Nothing Puzzles
              </h3>
              <ul className="flex flex-col gap-2">
                <MobilePuzzleItem
                  icon="grid"
                  name="Zip"
                  tagline="39 connections"
                />
                <MobilePuzzleItem
                  icon="cpu"
                  name="Mini Sudoku"
                  tagline="20 connections"
                />
                <MobilePuzzleItem
                  icon="layout"
                  name="Tango"
                  tagline="16 connections"
                />
                <MobilePuzzleItem
                  icon="box"
                  name="Queens"
                  tagline="19 connections"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) {
  return (
    <li
      className={`flex flex-col items-center gap-1 cursor-pointer group transition-colors ${
        active
          ? "text-nothing-red"
          : "text-nothing-text-muted hover:text-nothing-text"
      }`}
    >
      <div className="relative">
        <Icon name={icon} />
      </div>
      <span className="text-[10px] font-ntype uppercase tracking-wider hidden xl:block">
        {label}
      </span>
    </li>
  );
}

function MobileNavItem({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <li
      onClick={onClick}
      className={`flex items-center gap-3 p-3 cursor-pointer rounded-md transition-colors ${
        active
          ? "text-nothing-red bg-nothing-card-hover"
          : "text-nothing-text hover:bg-nothing-card-hover"
      }`}
    >
      <Icon name={icon} />
      <span className="text-sm font-ntype font-bold">{label}</span>
    </li>
  );
}

function MobilePuzzleItem({
  icon,
  name,
  tagline,
}: {
  icon: string;
  name: string;
  tagline: string;
}) {
  return (
    <li className="flex items-center gap-2 p-2 hover:bg-nothing-card rounded-md transition-colors cursor-pointer group">
      <div className="w-8 h-8 rounded bg-nothing-bg border border-nothing-border flex items-center justify-center text-nothing-red shrink-0">
        {icon === "grid" && (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" />
          </svg>
        )}
        {icon === "cpu" && (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm4 4h2v2H9V9zm4 0h2v2h-2V9zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2z" />
          </svg>
        )}
        {icon === "layout" && (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
          </svg>
        )}
        {icon === "box" && (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm4 4h6v6H9V9z" />
          </svg>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-ntype text-nothing-text group-hover:text-nothing-red transition-colors truncate">
          {name}
        </h4>
        <p className="text-[10px] text-nothing-text-muted">{tagline}</p>
      </div>
    </li>
  );
}

function Icon({ name }: { name: string }) {
  const className = "w-6 h-6";
  const strokeWidth = 1.5;

  switch (name) {
    case "home":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth={strokeWidth}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      );
    case "users":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth={strokeWidth}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    case "briefcase":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth={strokeWidth}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    case "message-square":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth={strokeWidth}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      );
    case "bell":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth={strokeWidth}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      );
    default:
      return null;
  }
}
