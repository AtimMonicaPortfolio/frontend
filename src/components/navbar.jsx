import { Link } from "react-router-dom";


export default function Navbar() {
return (
<nav className="bg-tealBlue text-white py-4 px-6 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-1 font-extrabold">
        <span className="text-tigerGold text-3xl">a</span>
        {/* Dark blue dot perfectly centered */}
        <span className="flex items-center">
          <svg
            className="w-2.5 h-2.5 text-deepBlue"
            fill="currentColor"
            viewBox="0 0 8 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
        <span className="text-white text-3xl">m</span>
      </div>

<div className="flex gap-6 font-bold text-lg">
  <Link to="/" className="hover:text-tigerGold">Home</Link>
  <Link to="/about" className="hover:text-tigerGold">About</Link>
  <Link to="/skills" className="hover:text-tigerGold">Skills</Link>
  <Link to="/projects" className="hover:text-tigerGold">Projects</Link>
  <Link to="/contact" className="hover:text-tigerGold">Contact</Link>
</div>

</nav>
);
}