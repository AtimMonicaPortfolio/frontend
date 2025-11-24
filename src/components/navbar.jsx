import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-tealBlue text-white py-6 px-6 shadow-md relative flex items-center justify-between">

      {/* LOGO – top-left */}
      <div className="flex items-center gap-1 font-extrabold text-3xl">
        <span className="text-tigerGold">a</span>
        {/* <span className="flex items-center">
          <svg
            className="w-2.5 h-2.5 text-deepBlue"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span> */}
        <span className="text-white">m</span>
      </div>

      {/* HAMBURGER BUTTON – top-right on mobile */}
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* DESKTOP LINKS – right side */}
      <div className="hidden md:flex gap-6 font-bold text-lg">
        <Link to="/" className="hover:text-tigerGold">Home</Link>
        <Link to="/about" className="hover:text-tigerGold">About</Link>
        <Link to="/skills" className="hover:text-tigerGold">Skills</Link>
        <Link to="/projects" className="hover:text-tigerGold">Projects</Link>
        <Link to="/contact" className="hover:text-tigerGold">Contact</Link>
      </div>

      {/* MOBILE MENU – slides from right */}
      <div
        className={`md:hidden absolute top-full right-0 bg-tealBlue w-2/3 flex flex-col gap-6 p-6 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link to="/" onClick={() => setOpen(false)} className="hover:text-tigerGold">Home</Link>
        <Link to="/about" onClick={() => setOpen(false)} className="hover:text-tigerGold">About</Link>
        <Link to="/skills" onClick={() => setOpen(false)} className="hover:text-tigerGold">Skills</Link>
        <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-tigerGold">Projects</Link>
        <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-tigerGold">Contact</Link>
      </div>
    </nav>
  );
}
