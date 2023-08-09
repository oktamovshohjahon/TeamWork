// css
import "./NavbarItems.css";

function NavbarItems() {
  return (
    <>
      <ul className="nav-items">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-item">
          <a href="/">Pages</a>
        </li>
        <li className="nav-item">
          <a href="/shop">Shop</a>
        </li>
        <li className="nav-item">
          <a href="/projects">Projects</a>
        </li>
        <li className="nav-item">
          <a href="/news">News</a>
        </li>
      </ul>
    </>
  );
}

export default NavbarItems;
