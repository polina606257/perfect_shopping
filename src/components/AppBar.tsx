import { ReactComponent as ShoppingBagIcon } from "../assets/icons/shopping_bag.svg";
import { ReactComponent as CrownIcon } from "../assets/icons/crown.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import "./appbar.styles.scss";
import { useState } from "react";

function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <CrownIcon className="logo" />

      <div className="nav_container">
        <NavigationLinks />

        <div className="dropdown_menu">
          <MenuIcon className="nav_icon" onClick={toggleMenu} />
          {isMenuOpen && <NavigationLinks />}
        </div>

        <ShoppingBagIcon className="nav_icon" />
      </div>
    </nav>
  );
}

export function NavigationLinks() {
  return (
    <ul id="myDropdown" className="nav_links">
      <a href="#">SHOP</a>
      <a href="#">CONTACT</a>
      <a href="#">SIGN IN</a>
    </ul>
  );
}

export default AppBar;
