import { categories } from "../../model/Caregory";
import CategoryItem from "./CategoryItem";
import styles from "./category_grid.module.scss";

function CategoryList() {
  return (
    <section className={styles.category_grid}>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </section>
  );
}
export default CategoryList;
