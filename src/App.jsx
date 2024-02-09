import "./App.css";

import { Home } from "./pages/Home";
import { ShipsList } from "./pages/ShipsList";
import { Ship } from "./pages/Ship";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ships-list" element={<ShipsList />} />
          <Route path="/ships-list/:shipId" element={<Ship />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
