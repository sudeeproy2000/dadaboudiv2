import "../style/navBar.css";
import logo from "../assets/dadaboudi-logo.png";
import { Button } from "antd-mobile";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header style={{ maxWidth: "100%" }}>
      <img src={logo} className="nav-img" />
      <nav>
        <Link style={{ fontSize: "16px" }} to="/" className="nav-item nav-home">
          Home
        </Link>
        <Link
          style={{ fontSize: "16px" }}
          to="/"
          className="nav-item nav-menus"
        >
          Menus
        </Link>
        <Link
          style={{ fontSize: "16px" }}
          to="/"
          className="nav-item nav-catering"
        >
          Catering
        </Link>
        <Link
          style={{ fontSize: "16px" }}
          to="/"
          className="nav-item nav-story"
        >
          Our Story
        </Link>
      </nav>
      <Button
        fill="solid"
        shape="rounded"
        style={{ backgroundColor: "#8a0221", color: "white" }}
        className="btn"
      >
        Enquiry
      </Button>
    </header>
  );
}

export default NavBar;
