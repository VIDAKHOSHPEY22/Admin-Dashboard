import { FaHome, FaChartBar, FaUser, FaCog } from 'react-icons/fa';
import { SidebarItem } from './SidebarItem';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg h-screen p-6 hidden md:block transition-all duration-300">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center tracking-tight">
        Admin
      </h2>
      <nav className="space-y-4">
        <SidebarItem icon={<FaHome />} text="Home" active />
        <SidebarItem icon={<FaChartBar />} text="Analytics" />
        <SidebarItem icon={<FaUser />} text="Users" />
        <SidebarItem icon={<FaCog />} text="Settings" />
      </nav>
    </aside>
  );
}

      {Text}

  ;
