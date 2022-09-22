import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full h-24 flex justify-start items-center">
      <img src="/vite.svg" className="mx-6 w-10" alt="Vite logo" />
      <ul className="flex text-lg font-semibold text-gray-500 py-2 px-3 ml-5">
        <li>
          <a className="mx-2 px-4 py-2 rounded active:bg-gray-300 hover:bg-blue-400 hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a className="mx-2 px-4 py-2 rounded active:bg-gray-300 hover:bg-blue-400 hover:text-white">
            About
          </a>
        </li>
        <li>
          <a className="mx-2 px-4 py-2 rounded active:bg-gray-300 hover:bg-blue-400 hover:text-white">
            Other
          </a>
        </li>
      </ul>
    </nav>
  );
}
