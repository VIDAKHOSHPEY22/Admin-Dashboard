import type { JSX } from "react";
import { Link, useLocation } from "react-router-dom";

export function SidebarItem({
  icon,
  text,
  to,
}: {
  icon: JSX.Element;
  text: string;
  to: string;
}) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors ${
        isActive ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100 text-gray-700'
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}
