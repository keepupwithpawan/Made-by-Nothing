import Link from "next/link";
import { UserPlus } from "lucide-react";

export default function Suggestions() {
  const suggestions = [
    { username: "designer_01", relation: "New to Instagram" },
    { username: "minimalist_fan", relation: "Followed by user_x" },
    { username: "nothing_tech_fan", relation: "Suggested for you" },
    { username: "typography_daily", relation: "Followed by user_y" },
    { username: "monochrome_art", relation: "Suggested for you" },
  ];

  return (
    <div className="hidden lg:block w-80 p-4 pt-8 md:mr-10">
      <div className="flex items-center justify-between mb-8 group cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 bg-nothing-gray rounded-full border border-nothing-light-gray group-hover:border-nothing-red transition-colors"></div>
          <div>
            <div className="font-bold text-sm tracking-wide group-hover:text-nothing-red transition-colors">
              current_user
            </div>
            <div className="text-gray-500 text-xs">Pawan Kamat</div>
          </div>
        </div>
        <button className="text-xs font-bold text-nothing-red hover:text-white transition-colors">
          Switch
        </button>
      </div>

      <div className="flex justify-between items-center mb-4 px-1">
        <span className="text-gray-500 font-bold text-sm tracking-wide">
          Suggested for you
        </span>
        <button className="text-xs font-bold hover:text-gray-400 transition-colors">
          See All
        </button>
      </div>

      <div className="space-y-4">
        {suggestions.map((user) => (
          <div
            key={user.username}
            className="flex items-center justify-between group p-1 rounded hover:bg-nothing-gray/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-nothing-gray rounded-full border border-nothing-light-gray flex items-center justify-center group-hover:border-white transition-colors">
                <UserPlus
                  size={14}
                  className="text-gray-500 group-hover:text-white transition-colors"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold hover:underline cursor-pointer tracking-wide">
                  {user.username}
                </span>
                <span className="text-xs text-gray-500">{user.relation}</span>
              </div>
            </div>
            <button className="text-xs text-nothing-red font-bold hover:text-white transition-colors">
              Follow
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-xs text-nothing-light-gray space-y-2 uppercase opacity-50">
        <p>About • Help • Press • API • Jobs • Privacy • Terms</p>
        <p>Locations • Language • Meta Verified</p>
        <p className="mt-4">© 2025 INSTAGRAM FROM NOTHING</p>
      </div>
    </div>
  );
}
