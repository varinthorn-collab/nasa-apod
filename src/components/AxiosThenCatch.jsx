import { useEffect, useState } from "react";
import axios from "axios";

export function AxiosThenCatch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch users");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <ul className="space-y-4 max-w-md mx-auto">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white shadow-md rounded-xl p-4 hover:bg-gray-50 transition"
          >
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-400">{user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
