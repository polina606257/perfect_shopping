import ShoppingBagIcon from "../icons/shoppingBag";
import { ReactComponent as CrownIcon } from "../icons/crown.svg";
import { ReactComponent as MenuIcon } from "../icons/menu.svg";
import styles from "./appbar.module.scss";
import { useState } from "react";

function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <CrownIcon className={styles.logo} />

      <div className={styles.nav_container}>
        <NavigationLinks />

        <div className={styles.dropdown_menu}>
          <MenuIcon className={styles.nav_icon} onClick={toggleMenu} />
          {isMenuOpen && <NavigationLinks />}
        </div>

        <ShoppingBagIcon className={styles.nav_icon} />
      </div>
    </nav>
  );
}

export function NavigationLinks() {
  return (
    <ul id="myDropdown" className={styles.nav_links}>
      <a href="#">SHOP</a>
      <a href="#">CONTACT</a>
      <a href="#">SIGN IN</a>
    </ul>
  );
}

export default AppBar;
