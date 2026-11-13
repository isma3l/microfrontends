import { Routes, Route } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}
