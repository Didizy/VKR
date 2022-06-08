import "./App.css";
import MapPage from "./pages/MapPage";
import CameraPage from "./pages/CameraPage";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CameraPage />} />
        <Route path="map" element={<MapPage />} />
      </Routes>

      {/* <Routes>
        <Route path="/" element={<CameraPage />}>
          <Route path="map" element={<MapPage />} />
        </Route>  
      </Routes> */}

      {/* <CameraPage /> */}
    </Router>
  );
}

export default App;
