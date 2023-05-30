import { Fragment } from "react";
import AppBar from "./components/AppBar";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/HomePage";

function App() {
  return (
    <Fragment>
      <AppBar />
      <Home />
    </Fragment>
  );
}

export default App;
