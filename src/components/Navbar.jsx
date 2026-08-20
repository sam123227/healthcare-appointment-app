import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-600 text-white px-10 py-4 flex items-center shadow-md flex-wrap">
      <h1 className="text-3xl font-bold">🏥 Healthcare</h1>

      <div className="flex gap-6 ml-20">
        <Link
          className="hover:text-blue-200 text-lg font-bold transition"
          to="/"
        >
          Home
        </Link>

        <Link
          className="hover:text-blue-200 text-lg font-bold transition"
          to="/doctors"
        >
          Doctors
        </Link>

        <Link
          className="hover:text-blue-200 text-lg font-bold transition"
          to="/appointments"
        >
          Appointments
        </Link>
      </div>

      <button
        onClick={toggleTheme}
        className="ml-auto rounded-lg bg-white px-4 py-2 text-black"
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;