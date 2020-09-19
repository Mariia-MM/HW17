import React from "react";
import Timer from "./Timer/timer";

import "./App.css";

function App() {
  return (
    <div>
      <Timer startTime="50" />
      <Timer startTime="100" autostart="true" step="2000" />
      <Timer startTime="15" step="5000" />
    </div>
  );
}

export default App;
