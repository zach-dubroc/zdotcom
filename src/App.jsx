// App.jsx
import"react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

import Games from "./pages/Games";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mca" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
