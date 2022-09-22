import React from "react";

export default function HomeMenu() {
  return (
    <div className="absolute bg-gray-100 grid grid-cols-2 w-1/4 px-8 py-6 rounded-xl left-20">
      <div>
        <h2 className="text-base font-semi text-gray-600 bold uppercase pb-3">
          Stuff Title
        </h2>
        <div className="my-1">
          <h3 className="font-gray-700 font-bold">Item 1</h3>
          <p className="leading-5 text-gray-600 font-semibold">
            Item 1 description
          </p>
        </div>
        <div className="my-1">
          <h3 className="font-gray-700 font-bold">Item 2</h3>
          <p className="leading-5 text-gray-600 font-semibold">
            Item 1 description this is more text to see what it does.
          </p>
        </div>
        <div className="my-1">
          <h3 className="font-gray-700 font-bold">Item 3</h3>
          <p className="leading-5 text-gray-600 font-semibold">
            Item 1 description
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-base font-semi text-gray-600 bold uppercase pb-3">
          Home Title
        </h2>
        <div>
          <h3 className="font-gray-700 font-bold my-1">Something</h3>
          <h3 className="font-gray-700 font-bold my-1">Whatever</h3>
          <h3 className="font-gray-700 font-bold my-1">Other</h3>
        </div>
      </div>
    </div>
  );
}
