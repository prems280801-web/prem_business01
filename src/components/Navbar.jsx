import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-5">

        <h1 className="text-2xl font-bold text-yellow-400">
          PAP & CO
        </h1>

        <div className="flex gap-8 text-lg">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "hover:text-yellow-300 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "hover:text-yellow-300 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/user"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "hover:text-yellow-300 transition"
            }
          >
            User
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;