import React from "react";
import { ReactComponent as Triforce } from "./assets/triforce.svg";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="flex items-center font-bold text-5xl tracking-tight text-gray-900">
        Zelda BOTW Starter
        <Triforce className="ml-4 w-20 h-20 text-zelda-triforce fill-current" />
      </h1>
    </div>
  );
}

export default App;
