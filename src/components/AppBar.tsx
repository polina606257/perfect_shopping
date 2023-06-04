import { ReactComponent as ShoppingBagIcon } from "../assets/icons/shopping_bag.svg";
import { ReactComponent as CrownIcon } from "../assets/icons/crown.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import "./appbar.styles.scss";
import { Fragment, useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";

function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
    window.addEventListener("popstate", () => {
      navigate(-1); // return to Home page when system back btn clicked
    });
  }, [location, navigate]);

  return (
    <Fragment>
      <nav>
        <CrownIcon className="logo" />

        <div className="nav-container">
          <NavigationLinks />

          <div className="dropdown-menu">
            <MenuIcon className="nav-icon" onClick={toggleMenu} />
            {isMenuOpen && <NavigationLinks />}
          </div>

          <ShoppingBagIcon className="nav-icon" />
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export const NavigationLinks = () => {
  return (
    <ul id="my-dropdown" className="nav-links">
      <NavLink to={"/shop"} className="nav-link">
        SHOP
      </NavLink>
      <NavLink to={"/contact"} className="nav-link">
        CONTACT
      </NavLink>
      <NavLink to={"/sign_in"} className="nav-link">
        SIGN IN
      </NavLink>
    </ul>
  );
};

export default AppBar;
