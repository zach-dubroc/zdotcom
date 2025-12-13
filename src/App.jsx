// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import Games from "./pages/Games";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mca" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
