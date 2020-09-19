import React from "react";
import Timer from "./Timer/timer";

import "./App.css";

function App() {
  <div>
    <Timer startTime="5" />
    <Timer startTime="10" autostart="true" step="2000" />
    <Timer startTime="15" step="5000" />
  </div>;
}

export default App;
