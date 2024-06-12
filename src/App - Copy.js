import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import DashboardMapView from "./pages/DashboardMapView";
import { ThemeProvider } from "./components/ThemeContext"; // Import ThemeProvider

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider> {/* Wrap routes with ThemeProvider */}
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/" element={<DashboardMapView />} />
            <Route path="/map-view" element={<DashboardMapView />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;