import React from "react";
import "./App.css";
import "./index.css";
import Home from "./views/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./views/Events";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sign-up" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
