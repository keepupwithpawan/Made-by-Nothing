export default function LeftSidebar() {
  return (
    <aside className="hidden xl:flex xl:w-[40%] 2xl:w-[32%] h-[calc(100vh-6rem)] flex-col gap-2 sticky top-20">
      {/* Profile Card */}
      <div className="bg-nothing-card h-[60%] rounded-lg group hover:rounded-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer">
        {/* Avatar */}
        <div className="bg-nothing-bg w-full h-full rounded-lg group-hover:rounded-2xl transition-all duration-500 relative overflow-hidden">
          {/* Background Image with Zoom Effect */}
          <div className="absolute inset-0 bg-[url('/profile.jpg')] bg-cover bg-center scale-110 group-hover:scale-105 transition-transform duration-500" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />

          {/* Info */}
          <div className="absolute bottom-0 left-0 w-full p-3 xl:p-4 z-10">
            <h2 className="text-xl xl:text-2xl font-ndot text-white">
              Pawan Kamat
            </h2>
            <p className="text-xs xl:text-sm text-white mt-1 font-ntype leading-tight">
              Junior Software Developer at uKnowva HRMS
            </p>
          </div>

          {/* My Items Button */}
          <div className="absolute top-3 right-3 z-20">
            <button className="text-xs font-ntype font-bold bg-nothing-red text-white px-3 xl:px-4 py-1.5 rounded-full hover:bg-red-600 transition-all duration-300 cursor-pointer">
              My Items
            </button>
          </div>
        </div>
      </div>

      {/* Puzzles (Moved from Right Sidebar) */}
      <div className="bg-nothing-card h-[40%] rounded-md border border-nothing-border p-3 xl:p-4 transition-colors duration-300 hover:bg-nothing-card-hover">
        <div className="h-[15%] flex justify-between items-center mb-3">
          <h2 className="text-lg xl:text-xl font-bold font-ntype text-nothing-text px-1">
            Nothing Puzzles
          </h2>
        </div>

        <ul className="h-[85%] flex flex-col justify-between pb-3">
          <PuzzleItem icon="grid" name="Zip" tagline="39 connections played" />
          <PuzzleItem
            icon="cpu"
            name="Mini Sudoku"
            tagline="20 connections played"
          />
          <PuzzleItem
            icon="layout"
            name="Tango"
            tagline="16 connections played"
          />
          <PuzzleItem
            icon="box"
            name="Queens"
            tagline="19 connections played"
          />
        </ul>
      </div>
    </aside>
  );
}

function PuzzleItem({
  icon,
  name,
  tagline,
}: {
  icon: string;
  name: string;
  tagline: string;
}) {
  return (
    <li className="flex items-center justify-between cursor-pointer p-1 rounded transition-colors group">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 xl:w-7 xl:h-7 rounded bg-nothing-bg border border-nothing-border flex items-center justify-center text-nothing-red transition-all duration-300 group-hover:rounded-[60px] group-hover:p-1.5">
          {/* Simple icon placeholders */}
          {icon === "grid" && (
            <svg
              className="w-4 h-4 xl:w-5 xl:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" />
            </svg>
          )}
          {icon === "cpu" && (
            <svg
              className="w-4 h-4 xl:w-5 xl:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm4 4h2v2H9V9zm4 0h2v2h-2V9zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2z" />
            </svg>
          )}
          {icon === "layout" && (
            <svg
              className="w-4 h-4 xl:w-5 xl:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
            </svg>
          )}
          {icon === "box" && (
            <svg
              className="w-4 h-4 xl:w-5 xl:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm4 4h6v6H9V9z" />
            </svg>
          )}
        </div>
        <div className="flex items-center gap-2">
          <h3 className="text-sm xl:text-md font-ntype group-hover:text-nothing-red transition-all duration-300 text-nothing-text">
            {name}
          </h3>
          <p className="text-[9px] xl:text-[10px] text-nothing-text-muted">
            ({tagline})
          </p>
        </div>
      </div>
    </li>
  );
}
