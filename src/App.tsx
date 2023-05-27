import { Fragment } from "react";
import AppBar from "./components/AppBar";
import CategoryGrid from "./components/category/CategoryGrid";

function App() {
  return (
    <Fragment>
      <AppBar />
      <CategoryGrid />
    </Fragment>
  );
}

export default App;
