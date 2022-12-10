import React, { useEffect } from "react";
import Navbar from "./components/Nav/Navbar";
import "./App.css";
import Home from "./views/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./views/Events";

import SignUp from "./views/SignUp";

function App() {
  useEffect(() => {
    if (localStorage.getItem("--variable-height") != null) {
      document
        .querySelector(":root")
        .style.setProperty(
          "--variable-height",
          localStorage.getItem("--variable-height")
        );
      return;
    }

    const container = document.getElementsByClassName("tiles-container")[0];
    const maxHeight = container.scrollHeight;
    document
      .querySelector(":root")
      .style.setProperty("--variable-height", maxHeight + "px");
    localStorage.setItem("--variable-height", maxHeight + "px");
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
