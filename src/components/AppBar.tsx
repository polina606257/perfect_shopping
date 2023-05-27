import ShoppingBagIcon from "../icons/shoppingBag";
import { ReactComponent as CrownIcon } from "../icons/crown.svg";
import { ReactComponent as MenuIcon } from "../icons/menu.svg";
import styles from "./appbar.module.scss";

function AppBar() {
  return (
    <nav>
      <CrownIcon className={styles.logo} />
      <div className={styles.nav_container}>
        <ul className={styles.nav_links}>
          <li>
            <a href="#">SHOP</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">SIGN IN</a>
          </li>
        </ul>

        <div className={styles.dropdown_menu}>
          <MenuIcon className={styles.nav_icon} onClick={openOrCloseMenu} />
          <div id="myDropdown" className={styles.dropdown_content}>
            <a href="#">SHOP</a>
            <a href="#">CONTACT</a>
            <a href="#">SIGN IN</a>
          </div>
        </div>
        <ShoppingBagIcon className={styles.nav_icon} />
      </div>
    </nav>
  );
}

function openOrCloseMenu() {
  const dropdown = document.getElementById("myDropdown");
  dropdown?.classList.toggle(styles.show);
}

export default AppBar;
