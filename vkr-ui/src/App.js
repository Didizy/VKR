import "./App.css";
import MapPage from "./pages/MapPage";
import CameraPage from "./pages/CameraPage";
import LocationPage from "./pages/LocationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CameraPage />} />
        <Route path="map" element={<MapPage />} />
        <Route path="location" element={<LocationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
