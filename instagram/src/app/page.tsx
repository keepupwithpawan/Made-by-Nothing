"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Sidebar from "@/components/Sidebar";
import DirectMessages from "@/components/DirectMessages";
import StoryTray from "@/components/StoryTray";
import Post from "@/components/Post";
import Footer from "@/components/Footer";

export default function Home() {
  const [dmWidth, setDmWidth] = useState(384);
  const [isResizing, setIsResizing] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  const startResizing = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        const sidebarWidth = 256; // md:pl-64
        const availableWidth = window.innerWidth - sidebarWidth;
        const newWidth = window.innerWidth - e.clientX;

        const minWidth = 384;
        const maxWidth = availableWidth / 2;

        if (newWidth >= minWidth && newWidth <= maxWidth) {
          setDmWidth(newWidth);
        }
      }
    },
    [isResizing]
  );

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", resize);
      window.addEventListener("mouseup", stopResizing);
    } else {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    }
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [isResizing, resize, stopResizing]);

  const posts = [
    {
      id: 1,
      username: "champagnepapi",
      location: "Toronto",
      image: "/post1.jpg",
      avatar: "/post1-profile.jpg",
      likes: "1,234,567",
      caption: "Started from the bottom now we here #toronto #views",
      comments: "12,430",
      timestamp: "2 h",
    },
    {
      id: 2,
      username: "seedhemaut",
      location: "Mumbai",
      image: "/post2.jpg",
      avatar: "/seedhe_maut_profile.png",
      likes: "85,432",
      caption: "नया साल, वही जोश ⚔️ #tbsm #delhi",
      comments: "450",
      timestamp: "4 h",
    },
  ];

  return (
    <div
      className={`flex bg-nothing-bg text-nothing-text font-dot min-h-screen transition-colors duration-300 ${
        isResizing ? "cursor-ew-resize select-none" : ""
      }`}
    >
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main ref={mainRef} className="flex-1 flex w-full md:pl-64">
        <div className="flex w-full">
          {/* Feed Section - Takes remaining space */}
          <div className="flex-1 max-w-2xl mx-auto py-4 px-4 w-full overflow-y-auto h-screen scrollbar-none">
            <StoryTray />
            <div className="mt-8">
              {posts.map((post) => (
                <Post
                  key={post.id}
                  username={post.username}
                  location={post.location}
                  image={post.image}
                  avatar={post.avatar}
                  likes={post.likes}
                  caption={post.caption}
                  comments={post.comments}
                  timestamp={post.timestamp}
                />
              ))}
            </div>
            <Footer />
          </div>

          {/* Right Sidebar (Direct Messages) - Resizable */}
          <div className="hidden xl:block">
            <DirectMessages width={dmWidth} onResizeStart={startResizing} />
          </div>
        </div>
      </main>
    </div>
  );
}
