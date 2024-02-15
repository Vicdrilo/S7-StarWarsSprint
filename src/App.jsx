import "./App.css";

import { Home } from "./pages/Home";
import { ShipsList } from "./pages/ShipsList";
import { Ship } from "./pages/Ship";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

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
