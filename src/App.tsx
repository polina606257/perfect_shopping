import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import routerConfig from "./utils/router.config";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

function App() {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: require("../src/assets/strings/en.json"),
      },
    },
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppBar />}>
          {routerConfig.map((routerData) => (
            <Route path={routerData.path} element={routerData.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
