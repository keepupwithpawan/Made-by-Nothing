import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import MainFeed from "./components/MainFeed";
import FloatingPostButton from "./components/FloatingPostButton";

export default function Home() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300">
      <Navbar />

      <div className="pt-20 max-w-7xl mx-auto px-2 sm:px-4 flex flex-col xl:flex-row justify-center gap-4 xl:gap-6">
        <LeftSidebar />
        <div className="w-full flex flex-col">
          <MainFeed />
          {/* Footer / Copyright */}
          <footer className="w-full mt-2 mb-5 bg-nothing-card-hover border border-nothing-border text-center text-xs text-nothing-text font-ndot p-3 sm:p-4 rounded-md">
            <p>LinkedIn Corporation © 2025</p>
          </footer>
        </div>
      </div>
      <FloatingPostButton />
    </div>
  );
}
