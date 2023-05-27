import { categories } from "../../model/Caregory";
import CategoryItem from "./CategoryItem";
import "./category_grid.styles.scss";

function CategoryList() {
  return (
    <section className="category_grid">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </section>
  );
}
export default CategoryList;
