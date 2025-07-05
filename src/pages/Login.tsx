import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("authToken", data.token);
      navigate("/");
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="123456"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}