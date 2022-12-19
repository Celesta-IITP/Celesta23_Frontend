import React, { useEffect } from "react";
import Navbar from "./components/Nav/Navbar";
import "./App.css";
import "./index.css";
import Home from "./views/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./views/Events";

import SignUp from "./views/SignUp";

function App() {
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
