import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Homepage/Home";
import Spells from "./components/Spells/Spells";
import Houses from "./components/Houses/Houses";
import Wizardkind from "./components/Wizardkind/Wizardkind";
import HouseDetails from "./components/Houses/HouseDetails";
import Registration from "./components/Registration/Registraion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Wizardkind" element={<Wizardkind />} />
        <Route path="Spells" element={<Spells />} />
        <Route path="Houses" element={<Houses />} />
        <Route path="/Houses/:selectedHouse" element={<HouseDetails />} />
        <Route path="Registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
