import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

export default function Topbar() {
  return (
    <header className="bg-white shadow-md rounded-xl px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3 w-full max-w-md">
        <FaSearch className="text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search something..."
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* پروفایل و اعلان */}
      <div className="flex items-center gap-6">
        <button className="relative">
          <FaBell className="text-gray-600 text-xl" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-2">
          <FaUserCircle className="text-3xl text-gray-600" />
          <span className="font-medium text-gray-800">Admin</span>
        </div>
      </div>
    </header>
  );
}