import { categories } from "../model/Caregory";
import CategoryItem from "../components/category/CategoryItem";
import "./home_page.styles.scss";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <section className="category_grid">
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </section>
    </Fragment>
  );
};

export default Home;
