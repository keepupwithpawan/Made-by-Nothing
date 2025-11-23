"use client";

import { useState } from "react";

export default function FloatingPostButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 z-50 flex flex-col items-end gap-3">
      {/* Menu Popup */}
      <div
        className={`bg-nothing-bg border border-nothing-border rounded-xl p-3 sm:p-4 shadow-2xl transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-0 opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2 sm:gap-3 w-56 sm:w-64">
          <h3 className="font-ndot text-lg sm:text-xl text-nothing-text border-b border-nothing-border pb-2">
            Create
          </h3>

          <MenuOption icon="edit" label="Write a post" />
          <MenuOption icon="image" label="Upload media" />
          <MenuOption icon="calendar" label="Create event" />
          <MenuOption icon="article" label="Write article" />
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-nothing-red text-white flex items-center justify-center shadow-lg hover:bg-red-600 transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? "rotate-45" : "rotate-0"
        }`}
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  );
}

function MenuOption({ icon, label }: { icon: string; label: string }) {
  return (
    <button className="flex items-center gap-2 sm:gap-3 p-2 hover:bg-nothing-card-hover rounded-lg transition-colors group text-left w-full">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-nothing-bg border border-nothing-border flex items-center justify-center text-nothing-text-muted group-hover:text-nothing-red group-hover:border-nothing-red transition-all duration-300">
        {icon === "edit" && (
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        )}
        {icon === "image" && (
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
        {icon === "calendar" && (
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
        {icon === "article" && (
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="2"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
        )}
      </div>
      <span className="font-ntype text-xs sm:text-sm text-nothing-text font-bold group-hover:text-nothing-red transition-all duration-300 cursor-pointer">
        {label}
      </span>
    </button>
  );
}
