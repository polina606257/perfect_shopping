import { ReactComponent as ShoppingBagIcon } from "../assets/icons/shopping_bag.svg";
import { ReactComponent as CrownIcon } from "../assets/icons/crown.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import "./appbar.styles.scss";
import { Fragment, useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("popstate", () => {
      navigate(-1); // return to Home page when system back btn clicked
    });
  }, []);

  return (
    <Fragment>
      <nav>
        <CrownIcon className="logo" />

        <div className="nav_container">
          <NavigationLinks closeMenu={closeMenu} />

          <div className="dropdown_menu">
            <MenuIcon className="nav_icon" onClick={toggleMenu} />
            {isMenuOpen && <NavigationLinks closeMenu={closeMenu} />}
          </div>

          <ShoppingBagIcon className="nav_icon" />
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export const NavigationLinks: React.FC<{ closeMenu: () => void }> = (props) => {
  return (
    <ul id="myDropdown" className="nav_links">
      <NavLink to={"/shop"} className="nav_link" onClick={props.closeMenu}>
        SHOP
      </NavLink>
      <NavLink to={"/contact"} className="nav_link" onClick={props.closeMenu}>
        CONTACT
      </NavLink>
      <NavLink to={"/sign_in"} className="nav_link" onClick={props.closeMenu}>
        SIGN IN
      </NavLink>
    </ul>
  );
};

export default AppBar;
