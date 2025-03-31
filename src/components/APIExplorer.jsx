import { useState } from "react";
import axios from "axios";

export function APIExplorer() {
  const [url, setUrl] = useState(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" w-full bg-gray-100 p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          API Explorer Tool
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
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
            Fetch
          </button>
        </div>

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
