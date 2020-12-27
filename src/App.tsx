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
      <div className="social-buttons">
          <GitHubButton
              href="https://nimnordic.com"
              data-color-scheme="no-preference: light; light: light; dark: light;"
              data-size="large"
              aria-label="NIM Nordic website"
          >
              NIM Nordic website
          </GitHubButton>
      </div>
    </div>
  );
}

export default App;
