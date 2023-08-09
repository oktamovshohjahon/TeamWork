// css
import "./Header.css";

// components
import Navbar from "../navbar/Navbar";

// images
import logo from "../../assets/navbarLogo.png";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="" /> <span>Organick</span>
          </a>
        </div>
        <nav className="header-nav">
          <Navbar />
        </nav>
      </div>
    </header>
  );
}

export default Header;
