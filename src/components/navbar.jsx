import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-tealBlue text-white py-4 px-6 flex justify-between items-center shadow-md">

      {/* Logo */}
      <div className="flex items-center gap-1 font-extrabold">
        <span className="text-tigerGold text-3xl">a</span>
        <span className="flex items-center">
          <svg
            className="w-2.5 h-2.5 text-deepBlue"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
        <span className="text-white text-3xl">m</span>
      </div>

      {/* HAMBURGER BUTTON – shows only on mobile */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* NAV LINKS */}
      <div
        className={`
          flex gap-6 font-bold text-lg
          
          hidden md:flex              /* <-- Shows on tablet & desktop */
          
          ${open ? "flex flex-col absolute top-16 right-6 bg-tealBlue p-4 rounded-lg shadow-lg md:hidden" : ""} 
          /* <-- Shows dropdown on mobile when open */
        `}
      >
        <Link to="/" className="hover:text-tigerGold">Home</Link>
        <Link to="/about" className="hover:text-tigerGold">About</Link>
        <Link to="/skills" className="hover:text-tigerGold">Skills</Link>
        <Link to="/projects" className="hover:text-tigerGold">Projects</Link>
        <Link to="/contact" className="hover:text-tigerGold">Contact</Link>
      </div>

    </nav>
  );
}
