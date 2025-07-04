import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatCard from './components/StatCard';
import ChartBox from './components/ChartBox';
import UserTable from './components/UserTable';

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Topbar */}
        <Topbar />

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Users" value="1,245" icon="👥" color="blue" />
          <StatCard title="Sales" value="$23,870" icon="💰" color="green" />
          <StatCard title="Visitors" value="8,931" icon="🌐" color="orange" />
          <StatCard title="Conversion" value="98%" icon="📈" color="purple" />
        </div>

        {/* Chart + Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartBox />
          <UserTable />
        </div>
      </div>
    </div>
  );
}