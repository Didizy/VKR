import "./App.css";
import MapPage from "./Pages/MapPage";
import CameraPage from "./Pages/CameraPage";
import LocationPage from "./Pages/LocationPage";
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
