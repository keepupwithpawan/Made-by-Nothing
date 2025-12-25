"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

interface PostProps {
  username: string;
  location: string;
  image?: string;
  avatar?: string;
  likes: string;
  caption: string;
  comments: string;
  timestamp: string;
}

export default function Post({
  username,
  location,
  image,
  avatar,
  likes,
  caption,
  comments,
  timestamp,
}: PostProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="pb-6 mb-6 last:border-none">
      <div className="flex items-center justify-between p-3 pl-0">
        <div className="flex items-center gap-3 cursor-pointer group">
          {avatar ? (
            <div className="w-8 h-8 rounded-full border border-nothing-border group-hover:border-nothing-red transition-colors duration-300 relative overflow-hidden">
              <Image
                src={avatar}
                alt={username}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-nothing-card border border-nothing-border group-hover:border-nothing-red transition-colors duration-300"></div>
          )}
          <div className="flex flex-col">
            <span className="text-sm font-bold group-hover:text-nothing-red transition-colors duration-300">
              {username} &nbsp;
              <span className="text-xs text-gray-500 tracking-wider">
                • {timestamp}
              </span>
            </span>
            <span className="text-xs text-gray-500 tracking-wider">
              {location}
            </span>
          </div>
        </div>
        <MoreHorizontal className="cursor-pointer hover:text-nothing-red transition-colors" />
      </div>

      {/* Image Placeholder */}
      <div
        className="w-full aspect-square bg-nothing-gray/10 rounded-lg flex items-center justify-center relative group overflow-hidden cursor-pointer"
        onDoubleClick={() => setIsLiked(!isLiked)}
      >
        {image ? (
          <Image src={image} alt="Post" fill className="object-cover" />
        ) : (
          <>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="text-nothing-light-gray opacity-20 text-6xl font-bold rotate-[-45deg] select-none group-hover:scale-110 transition-transform duration-700">
              NOTHING
            </span>
          </>
        )}
      </div>

      <div className="pt-3">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-5">
            <Heart
              onClick={() => setIsLiked(!isLiked)}
              className={`w-6 h-6 cursor-pointer transition-all duration-300 hover:scale-110 ${
                isLiked
                  ? "text-nothing-red fill-nothing-red"
                  : "hover:text-nothing-red"
              }`}
              strokeWidth={isLiked ? 2 : 1.5}
            />
            <MessageCircle
              className="w-6 h-6 hover:text-nothing-red cursor-pointer transition-colors duration-300 hover:scale-110"
              strokeWidth={1.5}
            />
            <Send
              className="w-6 h-6 hover:text-nothing-red cursor-pointer transition-colors duration-300 hover:scale-110"
              strokeWidth={1.5}
            />
          </div>
          <Bookmark
            className="w-6 h-6 hover:text-nothing-red cursor-pointer transition-colors duration-300 hover:scale-110"
            strokeWidth={1.5}
          />
        </div>

        <div className="text-sm font-bold mb-1 tracking-wide">
          {likes} likes
        </div>
        <div className="text-sm leading-relaxed">
          <span className="font-bold mr-2 hover:underline cursor-pointer hover:text-nothing-red transition-colors">
            {username}
          </span>
          <span className="tracking-wide text-gray-300 dark:text-gray-500">
            {caption}
          </span>
        </div>
      </div>
    </div>
  );
}
