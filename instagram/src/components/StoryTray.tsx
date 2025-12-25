import { Plus } from "lucide-react";
import Image from "next/image";

export default function StoryTray() {
  const users = [
    {
      id: 1,
      username: "alex_designs",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 2,
      username: "sarah_creates",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 3,
      username: "mike_studio",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 4,
      username: "jessica_art",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 5,
      username: "david_photo",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 6,
      username: "emma_vlogs",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 7,
      username: "chris_codes",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 8,
      username: "lisa_travels",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 9,
      username: "tom_guitars",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 10,
      username: "anna_fashion",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 11,
      username: "james_fitness",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 12,
      username: "zoe_life",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 13,
      username: "ryan_tech",
      image:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 14,
      username: "kate_music",
      image:
        "https://images.unsplash.com/photo-1515023115689-589c33041697?w=200&h=200&fit=crop&q=80",
    },
    {
      id: 15,
      username: "sam_skates",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop&q=80",
    },
  ];

  return (
    <div className="flex gap-4 overflow-x-auto py-6 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Current User Add Story */}
      <div className="flex flex-col items-center gap-2 cursor-pointer group shrink-0 ">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-nothing-card flex items-center justify-center border-2 border-transparent transition-all duration-300 relative overflow-hidden">
            <Image src="/profile.jpg" alt="You" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 bg-nothing-red text-white rounded-full p-0.5 border-2 border-nothing-bg group-hover:scale-110 transition-transform">
            <Plus size={12} strokeWidth={4} />
          </div>
        </div>
        <span className="text-xs tracking-wide group-hover:text-nothing-red transition-colors">
          Add Story
        </span>
      </div>

      {users.map((user) => (
        <div
          key={user.id}
          className="flex flex-col items-center gap-2 cursor-pointer group shrink-0"
        >
          <div className="w-16 h-16 rounded-full p-[2px] bg-nothing-red transition-colors duration-300">
            <div className="w-full h-full rounded-full bg-nothing-bg border-2 border-nothing-bg flex items-center justify-center relative overflow-hidden">
              <Image
                src={user.image}
                alt={user.username}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <span className="text-xs tracking-wide overflow-hidden w-16 text-center text-ellipsis whitespace-nowrap group-hover:text-nothing-red transition-colors">
            {user.username}
          </span>
        </div>
      ))}
    </div>
  );
}
