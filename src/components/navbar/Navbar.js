// css
import "./Navbar.css";

// components
import NavbarItems from "../navbarItems/NavbarItems";
import NavbarButtons from "../navbarButtons/NavbarButtons";

function Navbar() {
  return (
    <>
      <NavbarItems />
      <NavbarButtons />
    </>
  );
}

export default Navbar;
