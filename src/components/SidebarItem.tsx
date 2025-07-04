import type { JSX } from "react";

export function SidebarItem({
  icon,
  text,
  active = false,
}: {
  icon: JSX.Element;
  text: string;
  active?: boolean;
}) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors ${
        active ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100 text-gray-700'
      }`}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}
