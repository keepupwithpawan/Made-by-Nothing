"use client";

import Image from "next/image";
import { useState } from "react";

export default function MainFeed() {
  return (
    <main className="w-full lg:w-[95%] flex flex-col gap-2">
      {/* Post */}

      <Post
        author="Nothing"
        headline="Making tech fun again."
        time="2d •"
        content="Phone (3a) pro is here. Powerfully unique."
        image="/post-1.png"
      />
      <Post
        author="Kunal Kushwaha"
        headline="Teaching millions how to code and helping businesses scale."
        time="15h • Edited •"
        content="Leave Delhi, go in debt if you have to.\n\nI used to think, how bad can the AQI really be for people in Delhi? I knew i..."
        image="/post-2.jpg"
      />
    </main>
  );
}

function MediaButton({
  icon,
  label,
  color,
}: {
  icon: string;
  label: string;
  color: string;
}) {
  return (
    <button className="flex items-center gap-2 px-2 py-2 hover:bg-nothing-card-hover rounded-md transition-colors">
      <div className={`w-4 h-4 ${color} opacity-80`}>
        {icon === "image" && (
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
        )}
        {icon === "calendar" && (
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
          </svg>
        )}
        {icon === "article" && (
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
          </svg>
        )}
      </div>
      <span className="text-sm font-bold text-nothing-text-muted font-ntype">
        {label}
      </span>
    </button>
  );
}

function Post({
  author,
  headline,
  time,
  content,
  image,
}: {
  author: string;
  headline: string;
  time: string;
  content: string;
  image: string;
}) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="bg-nothing-card rounded-md border border-nothing-border overflow-hidden">
      {/* Header */}
      <div className="p-2 sm:p-3 flex gap-2 sm:gap-3 relative">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-nothing-text flex items-center justify-center text-nothing-bg font-ndot text-xs shrink-0">
          {author[0]}
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span className="font-bold text-xs sm:text-sm hover:underline hover:text-nothing-red transition-colors duration-300 cursor-pointer text-nothing-text truncate">
              {author}
            </span>
            <span className="text-nothing-text-muted text-xs shrink-0">
              • 3rd+
            </span>
          </div>
          <span className="text-xs text-nothing-text-muted line-clamp-1">
            {headline}
          </span>
          <div className="flex items-center gap-1 text-xs text-nothing-text-muted">
            <span>{time}</span>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
        </div>
        <button className="absolute top-2 sm:top-3 right-2 sm:right-3 text-nothing-red font-bold text-xs sm:text-sm flex items-center gap-1 hover:bg-nothing-red/10 px-2 py-1 rounded transition-colors shrink-0">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          <span className="hidden sm:inline">Follow</span>
        </button>
      </div>

      {/* Content */}
      <div className="px-2 sm:px-3 pb-2">
        <p className="text-xs sm:text-sm whitespace-pre-line font-ntype text-nothing-text">
          {content}
        </p>
      </div>

      {/* Image */}
      <div className="w-full h-[200px] sm:h-[250px] lg:h-[300px] overflow-hidden group cursor-pointer transition-colors duration-300">
        <Image
          src={image}
          alt={`${author} post image`}
          width={600}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Footer */}
      <div className="border-t border-nothing-border px-1 sm:px-2 py-1 flex justify-between">
        <ActionButton
          icon="thumbs-up"
          label="Like"
          isActive={isLiked}
          onClick={() => setIsLiked(!isLiked)}
        />
        <ActionButton icon="message-circle" label="Comment" />
        <ActionButton icon="repeat" label="Repost" />
        <ActionButton icon="send" label="Send" />
      </div>
    </div>
  );
}

function ActionButton({
  icon,
  label,
  isActive = false,
  onClick,
}: {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 hover:bg-nothing-card-hover rounded-md transition-colors group ${
        isActive
          ? "text-nothing-red"
          : "text-nothing-text-muted hover:text-nothing-text"
      }`}
    >
      <div className="flex items-center group-hover:scale-110 transition-transform">
        {icon === "thumbs-up" && (
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill={isActive ? "currentColor" : "none"}
            stroke={isActive ? "none" : "currentColor"}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="1.5"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
        )}
        {icon === "message-circle" && (
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="1.5"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
        {icon === "repeat" && (
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="1.5"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        )}
        {icon === "send" && (
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        )}
      </div>
      <span className="text-xs sm:text-sm font-bold font-ntype leading-none translate-y-px hidden sm:inline">
        {label}
      </span>
    </button>
  );
}
