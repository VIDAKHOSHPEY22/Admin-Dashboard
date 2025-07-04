import type { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  color?: string;
}

export default function StatCard({ title, value, icon, color = 'blue' }: StatCardProps) {
  const colors: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    purple: 'bg-purple-100 text-purple-600',
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between hover:shadow-lg transition-all">
      <div>
        <h4 className="text-sm text-gray-500 font-medium">{title}</h4>
        <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
      </div>
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full ${colors[color]} text-xl`}
      >
        {icon}
      </div>
    </div>
  );
}