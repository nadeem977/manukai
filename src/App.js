import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import CyberSpacePage from "./pages/CyberSpacePage";
import DashboardInData from "./pages/DashboardInData";
import DashboardInDeck from "./pages/DashboardInDeck";
import DashboardMapView from "./pages/DashboardMapView";
import { ThemeProvider } from "./components/ThemeContext"; // Import ThemeProvider
import "./main.css";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import CreateAccount from "./components/auth/CreateAccount/CreateAccount";
import Surveillance from "./pages/Surveillance";
import ManukaiGPT from "./pages/ManukaiGPT";
import { AppContext } from "./contexts/authContext";

const App = () => {

  const { newChat, newSearch ,newSurvel} = useContext(AppContext);

  const SearchComponent = newChat.map((_, i) => (
    <Route
      key={i}
      path={`/int-deck/ManukaiGPT/${i}`}
      element={<ManukaiGPT />}
    />
  ));

  const ChatComponent = newSearch.map((_, i) => (
    <Route key={i} path={`/int-deck/${i}`} element={<DashboardInDeck />} />
  ));

  const SurveComponent = newSurvel.map((_, i) => (
    <Route key={i} path={`/int-deck/Surveillance/${i}`} element={<Surveillance />} />
  ));
  return (
    <>
      <ThemeProvider>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/" element={<DashboardMapView />} />
          <Route path="/map-view" element={<DashboardMapView />} />
          <Route path="/dashboard" element={<DashboardInData />} />
          {SearchComponent}
          {ChatComponent}
          {SurveComponent}
          {/* <Route path="/Surveillance/*" element={<Surveillance />} /> */}
          <Route path="/cyberspace" element={<CyberSpacePage />} />
          <Route path="/*" element={<DashboardInData />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          {/* <Route path="/int-deck/Surveillance" element={<Surveillance />} /> */}
          <Route path="/CreateAccount" element={<CreateAccount />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
