// css
import "./NavbarButtons.css";

// icons && images
import searchIcon from "../../assets/svg/headerSearchIcon.svg";
import cartIcon from "../../assets/svg/headerCartIcon.svg";

function NavbarButtons() {
  return (
    <>
      <ul className="nav-buttons">
        <li className="nav-button nav-button__search">
          <input type="text" />
          <div className="search-icon">
            <span className="search-icon-bg">
              <img
                style={{ width: "20px", height: "20px" }}
                src={searchIcon}
                alt=""
              />
            </span>
          </div>
        </li>
        <li className="nav-button nav-button__cart2">
          <div className="cart-icon">
            <span className="cart-icon-bg">
              <img
                style={{ width: "20px", height: "20px" }}
                src={cartIcon}
                alt=""
              />
            </span>
          </div>
          <div className="nav-button__cart">
            <span>Cart (0)</span>
          </div>
        </li>
      </ul>
    </>
  );
}

export default NavbarButtons;
