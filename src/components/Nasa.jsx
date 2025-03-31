import { useEffect, useState } from "react";
import axios from "axios";

export function Nasa() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );
        setData(res.data);
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">NASA APOD</h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {data && data.media_type === "video" && (
        <div className="w-full max-w-2xl">
          <h2 className="text-lg font-semibold text-center mb-8">{data.title}</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 sm:h-96"
              src={data.url}
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-gray-600 pt-8">{data.explanation}</p>
        </div>
      )}
    </div>
  );
}