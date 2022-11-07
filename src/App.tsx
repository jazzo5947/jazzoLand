import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Register from "./pages/register";
import SelectPage from "./pages/select-page";
import { Routes, Route } from "react-router-dom";
import Map from "./pages/map";
import Main from "./pages/main";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Menu />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
