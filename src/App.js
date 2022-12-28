import React from "react";
import "./App.css";
import "./index.css";
import Home from "./views/Home";
import { Routes, Route, HashRouter } from "react-router-dom";
import Events from "./views/Events";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
