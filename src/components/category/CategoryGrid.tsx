import CategoryItem from "./CategoryItem";
import styles from "./category_grid.module.scss";

function CategoryList() {
  return (
    <section className={styles.category_grid}>
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </section>
  );
}
export default CategoryList;
