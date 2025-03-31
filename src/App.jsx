import { AxiosAsyncAwait } from "./components/AxiosAsyncAwait";
import { AxiosThenCatch } from "./components/AxiosThenCatch";
import { FetchPromise } from "./components/FetchPromise";
import { APIExplorer } from "./components/APIExplorer";
// import { APIExplorer2 } from "./components/APIExplorer2";

export default function App() {
  return (
    <div className="min-h-screen flex justify-center bg-blue-950">
      <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%]">
        <h1 className="w-full p-6 bg-amber-100 font-extrabold">
          First Meet with Axios
        </h1>
        <section className="w-full p-5 bg-amber-100 flex">
          <ul className="list-inside list-disc flex-1">
            <span className="font-semibold">Examples:</span>
            <li>Axios with Async/Await</li>
            <li>Axios with Then/Catch</li>
            <li>Fetch Promise</li>
            <li>API Explorer</li>
          </ul>
        </section>

        <section className="w-full p-5 bg-amber-100 flex">
          <AxiosAsyncAwait />
        </section>
        <section className="w-full p-5 bg-amber-100 flex">
          <AxiosThenCatch />
        </section>
        <section className="w-full p-5 bg-amber-100 flex">
          <FetchPromise />
        </section>
        <section className="w-full p-5 bg-amber-100 flex">
          <APIExplorer />
        </section>
        {/* <section className="w-full p-5 bg-amber-100 flex">
          <APIExplorer2 />
        </section> */}
      </div>
    </div>
  );
}
