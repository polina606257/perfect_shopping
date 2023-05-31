import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/HomePage";
import Shop from "./routes/ShopPage";
import Contact from "./routes/ContactPage";
import SignIn from "./routes/SignInPage";
import AppBar from "./components/AppBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route path="/" element={<Home key="home" />} />
          <Route path="shop" element={<Shop key="shop" />} />
          <Route path="contact" element={<Contact key="contact" />} />
          <Route path="sign_in" element={<SignIn key="sign in" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
