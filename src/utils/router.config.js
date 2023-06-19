import Contact from "../routes/ContactPage";
import Home from "../routes/HomePage";
import Shop from "../routes/ShopPage";
import SignInOptions from "../routes/SignInPage";

const routerConfig = [
  {
    path: "/",
    element: <Home key="home" />,
  },
  {
    path: "shop",
    element: <Shop key="shop" />,
  },
  {
    path: "contact",
    element: <Contact key="contact" />,
  },
  {
    path: "sign_in",
    element: <SignInOptions key="sign in" />,
  },
];

export default routerConfig;
