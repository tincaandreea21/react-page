import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home-page";
import Contact from "./components/Contact/contact-page";
import Projects from "./components/Projects/projects";
import About from "./components/About/about";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="App">
          <Routes>
            <Route path="/react-page/home" element={<Home />} />
            <Route path="/react-page/contact" element={<Contact />} />
            <Route path="/react-page/projects" element={<Projects />} />
            <Route path="/react-page/about" element={<About />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
