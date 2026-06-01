import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-yellow-800 shadow-lg sticky top-0 z-10 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-white tracking-tight">
              TicketFlow
            </span>
          </div>
          <div className="flex space-x-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-slate-200 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/create"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-slate-200 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              Create Ticket
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;