import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
// import { Layout } from "antd";
import "./style/bottomNavigation.css";
import OurBestSeller from "./components/OurBestSeller";
import BottomNav from "./components/BottomNav";
import BanglaLine from "./components/BanglaLine";
import MeetOurFounder from "./components/MeetOurFounder";
import FooterSection from "./components/FooterSection";
import Menu from "./components/Menu";
import Catering from "./components/Catering";
import AboutUs from "./components/AboutUs";
import FloorAndLounges from "./components/FloorAndLounges";
// import TestNav from "./components/TestNav";

// const { Content } = Layout;

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BanglaLine />
                <HeroSection />
                <OurBestSeller />
                <FloorAndLounges />
                <MeetOurFounder />
              </>
            }
          />
          <Route
            path="/menu"
            element={
              <>
                <Menu />
              </>
            }
          />
          <Route
            path="/catering"
            element={
              <>
                <Catering />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <AboutUs />
              </>
            }
          />
        </Routes>
        <FooterSection />
        <BottomNav />
      </Router>
    </>
  );
}

export default App;
