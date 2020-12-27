import React from "react";
import "./App.less";
import GitHubButton from "react-github-btn";
import { Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <div className="Banner">
        <div className="Banner-description">
          Swapnim.com is on unaudited software. Use at your own risk (it's still real money)...
        </div>
      </div>
      <Routes />
    </div>
  );
}

export default App;
