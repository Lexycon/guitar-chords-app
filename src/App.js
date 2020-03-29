import React from "react";
import ChordsApp from "./components/chordsApp";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">Gitarrenakkorde</nav>
      <div className="container">
        <ChordsApp />
      </div>
    </React.Fragment>
  );
}

export default App;
