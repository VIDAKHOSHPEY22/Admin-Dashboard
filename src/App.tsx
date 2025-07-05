import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import ChartBox from "./components/ChartBox";
import UserTable from "./components/UserTable";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import type { JSX } from "react";

function RequireAuth({ children }: { children: JSX.Element }) {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 space-y-6">
        <Topbar />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Users" value="1,245" icon="👥" color="blue" />
          <StatCard title="Sales" value="$23,870" icon="💰" color="green" />
          <StatCard title="Visitors" value="8,931" icon="🌐" color="orange" />
          <StatCard title="Conversion" value="98%" icon="📈" color="purple" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <ChartBox />
          <UserTable />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />

      <Route
        path="/"
        element={
          <RequireAuth>
            <DashboardLayout />
          </RequireAuth>
        }
      />
      <Route
        path="/users"
        element={
          <RequireAuth>
            <Users />
          </RequireAuth>
        }
      />
      <Route
        path="/settings"
        element={
          <RequireAuth>
            <Settings />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}