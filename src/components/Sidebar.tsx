// src/components/Sidebar.tsx
import { FaHome, FaChartBar, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import type { JSX } from "react";

function SidebarItem({
  icon,
  text,
  to,
  active = false,
}: {
  icon: JSX.Element;
  text: string;
  to: string;
  active?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors ${
        active ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white shadow-lg h-screen p-6 hidden md:block transition-all duration-300">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center tracking-tight">
        Admin
      </h2>
      <nav className="space-y-4">
        <SidebarItem
          icon={<FaHome />}
          text="Home"
          to="/"
          active={location.pathname === "/"}
        />
        <SidebarItem
          icon={<FaChartBar />}
          text="Analytics"
          to="/analytics"
          active={location.pathname === "/analytics"}
        />
        <SidebarItem
          icon={<FaUser />}
          text="Users"
          to="/users"
          active={location.pathname === "/users"}
        />
        <SidebarItem
          icon={<FaCog />}
          text="Settings"
          to="/settings"
          active={location.pathname === "/settings"}
        />
        <SidebarItem
          icon={<FaSignOutAlt />}
          text="Logout"
          to="/logout"
        />
      </nav>
    </aside>
  );
}