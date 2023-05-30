import { categories } from "../model/Caregory";
import CategoryItem from "../components/category/CategoryItem";
import "./home_page.styles.scss";

const Home = () => {
  return (
    <section className="category_grid">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </section>
  );
};

export default Home;
