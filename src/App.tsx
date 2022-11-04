import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Register from "./register";
import SelectPage from "./select-page";
import { Routes, Route } from "react-router-dom";
import Map from "./map/map";

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      <main>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
