import Category from "../../model/Caregory";
import styles from "./category_item.module.scss";

const CategoryItem: React.FC<{ category: Category }> = (props) => {
  return (
    <div className={styles.category_item}>
      <img src={props.category.image} />
      <div className={styles.category_content}>
        <h2 className={styles.category_name}>{props.category.name}</h2>
        <a className={styles.category_link} href="#">
          SHOP NOW
        </a>
      </div>
    </div>
  );
};
export default CategoryItem;
