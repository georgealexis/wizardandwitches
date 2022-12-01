import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Homepage/Home";
import Spells from "./components/Spells/Spells";
import Houses from "./components/Houses/Houses";
import Wizardkind from "./components/Wizardkind/Wizardkind";
import HouseDetails from "./components/Houses/HouseDetails";
import Registration from "./components/Registration/Registration";
import Species from "./components/Species/Species";
import { useState } from "react";

function App() {
  const [houseid, setHouseId] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Wizardkind" element={<Wizardkind />} />
        <Route path="Spells" element={<Spells />} />
        <Route path="Houses" element={<Houses callback={setHouseId} />} />
        <Route
          path="/Houses/:houseid"
          element={<HouseDetails id={houseid} />}
        />
        <Route path="Registration" element={<Registration />} />
        <Route path="Species" element={<Species />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
