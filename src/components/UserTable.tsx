interface User {
  id: number;
  name: string;
  email: string;
  status: 'Active' | 'Inactive';
}

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  { id: 3, name: 'Ali', email: 'ali@example.com', status: 'Active' },
  { id: 4, name: 'Sara Khan', email: 'sara@example.com', status: 'Inactive' },
];

export default function UserTable() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full overflow-x-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Latest Users</h3>
      <table className="min-w-full table-auto text-left border border-gray-200 rounded-md">
        <thead className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wide">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {users.map((user, i) => (
            <tr key={user.id} className="border-t hover:bg-gray-50 transition-all">
              <td className="px-4 py-3">{i + 1}</td>
              <td className="px-4 py-3 font-medium">{user.name}</td>
              <td className="px-4 py-3">{user.email}</td>
              <td className="px-4 py-3">
              <span
  className={`px-3 py-1 rounded-full text-sm font-semibold ${
    user.status === 'Active'
      ? 'bg-green-100 text-green-700'
      : 'bg-red-100 text-red-700'
  }`}
>
  {user.status}
</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}