import reactLogo from "./assets/react.svg";
import "./index.css";

import Navbar from "./assets/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center flex-col h-screen bg-gradient-to-r from-blue-100 to-purple-200">
        <div className="flex h-15">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="w-40 m-10" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="w-40 m-10" alt="React logo" />
          </a>
        </div>
        <h1 className="text-2xl">Vite + React + TailWind</h1>
        <div className="flex justify-center flex-col"></div>
        <p className="text-lg mt-3">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
