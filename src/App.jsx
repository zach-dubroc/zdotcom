// App.jsx
import"react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ZScaleCalc from "./pages/ZScaleCalc";
import Games from "./pages/Games";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mca" element={<Games />} />
        <Route path="/qalc" element={<ZScaleCalc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
