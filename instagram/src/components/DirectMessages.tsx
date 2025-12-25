"use client";

import { Search, PenSquare, ChevronDown } from "lucide-react";
import Image from "next/image";

interface DirectMessagesProps {
  width: number;
  onResizeStart: (e: React.MouseEvent) => void;
}

export default function DirectMessages({
  width,
  onResizeStart,
}: DirectMessagesProps) {
  const messages = [
    {
      id: 1,
      name: "champagnepapi",
      message: "Yo, that Toronto view is sick!",
      time: "5m",
      active: true,
      avatar: "/post1-profile.jpg",
    },
    {
      id: 2,
      name: "seedhemaut",
      message: "Naya saal, naya music ⚔️",
      time: "12m",
      active: true,
      avatar: "/post2-profile.jpg",
    },
    {
      id: 3,
      name: "alex_designs",
      message: "Sent you the project files",
      time: "25m",
      active: false,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 4,
      name: "sarah_creates",
      message: "Did you see the new update?",
      time: "1h",
      active: true,
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 5,
      name: "mike_studio",
      message: "Let's collab next week",
      time: "2h",
      active: true,
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 6,
      name: "jessica_art",
      message: "Liked your story",
      time: "3h",
      active: false,
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 7,
      name: "david_photo",
      message: "Check out my latest post",
      time: "5h",
      active: true,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 8,
      name: "emma_vlogs",
      message: "New video is up!",
      time: "8h",
      active: false,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
    },
  ];

  return (
    <div
      className="border-l border-nothing-border h-screen sticky top-0 bg-nothing-bg text-nothing-text transition-colors duration-300 flex flex-col relative"
      style={{ width: `${width}px` }}
    >
      {/* Resizer Handle */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 cursor-ew-resize hover:bg-nothing-red/50 transition-colors z-50"
        onMouseDown={onResizeStart}
      />

      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-nothing-border shrink-0">
        <div className="flex items-center gap-2 cursor-pointer group">
          <h1 className="text-xl font-bold group-hover:text-nothing-red transition-colors">
            keepupwithpawan
          </h1>
          <ChevronDown
            size={20}
            className="group-hover:text-nothing-red transition-colors"
          />
        </div>
        <PenSquare className="cursor-pointer hover:text-nothing-red transition-colors" />
      </div>

      {/* Tabs */}
      <div className="flex border-b border-nothing-border shrink-0">
        <div className="flex-1 p-3 text-center border-b-2 border-nothing-text font-bold cursor-pointer hover:text-nothing-red transition-colors">
          Primary
        </div>
        <div className="flex-1 p-3 text-center border-b-2 border-transparent text-gray-400 hover:text-nothing-text transition-colors cursor-pointer">
          General
        </div>
        <div className="flex-1 p-3 text-center border-b-2 border-transparent text-gray-400 hover:text-nothing-text transition-colors cursor-pointer">
          Requests
        </div>
      </div>

      {/* Search */}
      <div className="p-4 shrink-0">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-nothing-card border border-nothing-border rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-nothing-red transition-colors placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Note */}
      <div className="px-4 pb-4 shrink-0">
        <div className="relative inline-block cursor-pointer group">
          <div className="w-16 h-16 rounded-full bg-nothing-card border border-nothing-border group-hover:border-nothing-red transition-colors overflow-hidden relative">
            <Image
              src="/profile.jpg"
              alt="Your Note"
              fill
              className="object-cover opacity-50"
            />
          </div>
          <p className="text-xs text-center mt-1 text-gray-500">Your note</p>
        </div>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="flex items-center justify-between p-4 hover:bg-nothing-hover cursor-pointer transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-nothing-border group-hover:border-nothing-red transition-colors flex-shrink-0 relative overflow-hidden">
                <Image
                  src={msg.avatar}
                  alt={msg.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-bold group-hover:text-nothing-red transition-colors">
                  {msg.name}
                </span>
                <span className="text-xs text-gray-500 truncate w-40">
                  {msg.message} · {msg.time}
                </span>
              </div>
            </div>
            {msg.active && (
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
