import { useState } from "react";
import axios from "axios";

export function APIExplorer2() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState(
    '{"title": "foo","body": "bar","userId": 1}'
  );
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const config = {
        method: method.toLowerCase(),
        url,
      };

      if (["post", "put", "patch"].includes(method.toLowerCase())) {
        config.headers = { "Content-Type": "application/json" };
        config.data = JSON.parse(body);
      }

      const res = await axios(config);
      setData(res.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-gray-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          API Explorer Tool
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <select
            className="p-3 border rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>PATCH</option>
            <option>DELETE</option>
          </select>

          <input
            type="text"
            className="flex-1 p-3 border rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter API endpoint URL"
          />
          <button
            onClick={fetchData}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium"
          >
            Send
          </button>
        </div>

        {(method === "POST" || method === "PUT" || method === "PATCH") && (
          <textarea
            className="w-full p-3 border rounded-md text-sm font-mono text-gray-800 focus:outline-none focus:ring focus:ring-blue-300 mb-4"
            rows="6"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        )}

        {loading && <p className="text-center text-blue-500">Loading...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        {data && (
          <pre className="mt-4 bg-gray-800 text-green-300 text-xs p-4 rounded-lg overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
